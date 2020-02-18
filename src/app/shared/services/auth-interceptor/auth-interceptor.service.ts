import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../../models/user/user';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private userService: UserService,
    private readonly storageService: StorageService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user: User = this.userService.getUser();
    if (user && user.token) {
      let clonedRequest: HttpRequest<any>;
      clonedRequest = req.clone({
        headers: req.headers
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Bearer ' + user.token)
      });
      return next.handle(clonedRequest).pipe(
        catchError((err: HttpErrorResponse) => {
          if(err.status === 401) {
            this.storageService.remove('user');
            window.location.reload();
          }
          return throwError(err);
        })
      );
    } else {
      return next.handle(req);
    }
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error.");
  }
}
