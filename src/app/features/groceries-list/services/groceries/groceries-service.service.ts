import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../../models/item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private httpHeaders: HttpHeaders

  constructor(public httpClient: HttpClient) {
    this.groceriesListSubject = new BehaviorSubject<Item[]>([]);
    this.httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
  }

  public get items$(): Observable<Item[]> {
    return this.groceriesListSubject.asObservable();
  }

  public loadItems(): void {
    this.httpClient.get<Item[]>(environment.API_URL).subscribe(items => {
      this.dataSource.items = items;
      this.groceriesListSubject.next([...this.dataSource.items]);
    }, error => console.log(`ERROR: ${error}`));
  }

  public addItem(itemName: string): void {
    this.httpClient.post<Item[]>(
      environment.API_URL,
      JSON.stringify({
      name: itemName,
      ready: false
    }),
    { headers: this.httpHeaders }).subscribe(responseItem => {
      this.dataSource.items.push(responseItem);
      this.groceriesListSubject.next([...this.dataSource.items]);
    }, error => console.log(`ERROR: ${error}`));
  }

  public toggleItemStatus(id: string): void {
    this.httpClient.patch<Item>(
      environment.API_URL,
      JSON.stringify({ id }),
      { headers: this.httpHeaders }).subscribe(responseItem => {
        this.dataSource.items = this.dataSource.items.map(item => {
          if (item.id === responseItem.id) {
            item.status = !item.status;
          }
          return item;
        });
        this.groceriesListSubject.next([...this.dataSource.items]);
      }, error => console.log(`ERROR: ${error}`));
  }

  public deleteItem(id: string): void {
    this.httpClient.delete<Item>(
      `${environment.API_URL}/${id}`,
      { headers: this.httpHeaders }).subscribe(responseItem => {
        this.dataSource.items = this.dataSource.items.filter(item => item.id !== responseItem.id);
        this.groceriesListSubject.next([...this.dataSource.items]);
      }, error => console.log(`ERROR: ${error}`));
  }
}
