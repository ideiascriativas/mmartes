import { TestBed, inject } from '@angular/core/testing';

import { FullImageService } from './full-image.service';

describe('FullImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FullImageService]
    });
  });

  it('should be created', inject([FullImageService], (service: FullImageService) => {
    expect(service).toBeTruthy();
  }));
});
