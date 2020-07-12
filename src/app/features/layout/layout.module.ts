import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class LayoutModule { }
