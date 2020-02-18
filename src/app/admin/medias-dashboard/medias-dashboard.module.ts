import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MediasDashboardComponent } from './medias-dashboard.component';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [MediasDashboardComponent],
  entryComponents: [MediasDashboardComponent],
  imports: [
    DragDropModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    CommonModule
  ],
  exports: [MediasDashboardComponent]
})
export class MediasDashboardModule { }
