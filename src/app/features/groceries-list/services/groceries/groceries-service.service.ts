import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../../models/item';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

  private groceriesListSubject: BehaviorSubject<Item[]>;
  private dataSource = {
    items: [],
    error: ''
  };

  constructor(public httpClient: HttpClient) {
    this.groceriesListSubject = new BehaviorSubject<Item[]>([]);
  }

  public get items$(): Observable<Item[]> {
    return this.groceriesListSubject.asObservable();
  }

  public loadItems(): void {
    this.httpClient.get<Item[]>(environment.API_URL).subscribe(items => {
      this.dataSource.items = items;
      this.groceriesListSubject.next([...this.dataSource.items]);
    });
  }

  public addItem(itemName: string): void {
    this.httpClient.post<Item[]>(
      environment.API_URL,
      JSON.stringify({
      name: itemName
    })).subscribe(responseItem => {
      this.dataSource.items.push(responseItem);
      this.groceriesListSubject.next([...this.dataSource.items]);
    });
  }
}
