import { Component, OnInit } from '@angular/core';
import { GroceriesServiceService } from '../../services/groceries/groceries-service.service';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  public newItem: string;

  constructor(private groceriesService: GroceriesServiceService) { 
    this.newItem = '';
  }

  ngOnInit(): void {
  }

  public addNewItem(): void {
    this.groceriesService.addItem(this.newItem);
    this.newItem = '';
  }

}
