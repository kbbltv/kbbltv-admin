import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { LoginGuard } from './shared/guards/login/login.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'admin', canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard] },
  { path: 'login', component: AuthComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
