import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceriesListComponent } from './components/groceries-list/groceries-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { AddItemFormComponent } from './components/add-item-form/add-item-form.component';

import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [GroceriesListComponent, ListItemComponent, AddItemFormComponent],
  exports: [GroceriesListComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    FormsModule
  ]
})
export class GroceriesListModule { }
