import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { MediasDashboardModule } from './medias-dashboard/medias-dashboard.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    HomeComponent,
    TimelineComponent
  ],
  imports: [
    MatTooltipModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    MatGridListModule,
    MediasDashboardModule,
    FormsModule,
    HeaderModule,
    CommonModule,
    AdminRoutingModule
  ],
  providers: [MatDatepickerModule]
})
export class AdminModule { }
