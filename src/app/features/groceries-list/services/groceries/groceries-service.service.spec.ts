import { TestBed } from '@angular/core/testing';

import { GroceriesServiceService } from './groceries-service.service';

describe('GroceriesServiceService', () => {
  let service: GroceriesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceriesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
