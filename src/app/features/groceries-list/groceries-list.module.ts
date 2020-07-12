import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceriesListComponent } from './components/groceries-list/groceries-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';



@NgModule({
  declarations: [GroceriesListComponent, ListItemComponent],
  exports: [GroceriesListComponent],
  imports: [
    CommonModule
  ]
})
export class GroceriesListModule { }
