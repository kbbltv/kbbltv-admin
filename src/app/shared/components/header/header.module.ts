import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [HeaderComponent],
  entryComponents: [HeaderComponent],
  imports: [
    MatToolbarModule,
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
