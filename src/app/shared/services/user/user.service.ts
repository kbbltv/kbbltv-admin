import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../storage/storage.service';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private storage: StorageService
  ) { }

  public authenticate(username: string, password: string): void {
    this.http.post(environment.apiUrl + '/auth', { username: username, password: password }).toPromise()
    .then(res => {
      let user: User = new User();
      user = Object.assign(user, res);
      this.storage.set('user', user);
      this.router.navigate(['']);
    })
    .catch(err => {
      alert(err['error']);
    });
  }

  public getUser(): User {
    return this.storage.get('user');
  }

  public isLoggedIn(): boolean {
    const user = this.storage.get('user');
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
