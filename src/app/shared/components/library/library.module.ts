import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';



@NgModule({
  declarations: [LibraryComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LibraryComponent
  ]
})
export class LibraryModule { }
