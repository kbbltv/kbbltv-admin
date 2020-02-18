import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { LoginGuard } from './shared/guards/login/login.guard';
import { AuthInterceptorService } from './shared/services/auth-interceptor/auth-interceptor.service';
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    LoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
