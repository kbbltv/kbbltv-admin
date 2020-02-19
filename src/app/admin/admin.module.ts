import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavigationModule } from '../shared/components/navigation/navigation.module';
import { LibraryModule } from '../shared/components/library/library.module';
import { LibraryPageComponent } from './library-page/library-page.component';
import { TimelinePageComponent } from './timeline-page/timeline-page.component';

@NgModule({
  declarations: [
    LibraryPageComponent,
    TimelinePageComponent
  ],
  imports: [
    MatTooltipModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    MatGridListModule,
    FormsModule,
    NavigationModule,
    LibraryModule,
    CommonModule,
    AdminRoutingModule
  ],
  providers: [MatDatepickerModule]
})
export class AdminModule { }
