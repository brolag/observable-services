import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesListComponent } from './groceries-list.component';

describe('GroceriesListComponent', () => {
  let component: GroceriesListComponent;
  let fixture: ComponentFixture<GroceriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
