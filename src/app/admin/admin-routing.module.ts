import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth/auth.guard';
import { LibraryPageComponent } from './library-page/library-page.component';
import { TimelinePageComponent } from './timeline-page/timeline-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'library', canActivate: [AuthGuard] },
  { path: 'library', component: LibraryPageComponent, canActivate: [AuthGuard] },
  { path: 'timeline', component: TimelinePageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
