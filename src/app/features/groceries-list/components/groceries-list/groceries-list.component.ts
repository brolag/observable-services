import { Component, OnInit } from '@angular/core';
import { GroceriesServiceService } from '../../services/groceries/groceries-service.service';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from '../../models/item';

@Component({
  selector: 'app-groceries-list',
  templateUrl: './groceries-list.component.html',
  styleUrls: ['./groceries-list.component.scss']
})
export class GroceriesListComponent implements OnInit {

  public items$: Observable<Item[]>;

  constructor(private groceriesService: GroceriesServiceService) {
    this.items$ = this.groceriesService.items$;
  }

  ngOnInit(): void {
    this.groceriesService.loadItems();
  }

  public toggleItemStatus(itemId: string): void {
    this.groceriesService.toggleItemStatus(itemId);
  }

  public deleteItem(itemId: string): void {
    this.groceriesService.deleteItem(itemId);
  }
}
