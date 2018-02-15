import { TestBed, inject } from '@angular/core/testing';

import { ProductLineService } from './product-line.service';

describe('ProductLineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductLineService]
    });
  });

  it('should be created', inject([ProductLineService], (service: ProductLineService) => {
    expect(service).toBeTruthy();
  }));
});
