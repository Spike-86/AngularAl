import { TestBed, inject } from '@angular/core/testing';

import { GlobalConfService } from './global-conf.service';

describe('GlobalConfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalConfService]
    });
  });

  it('should be created', inject([GlobalConfService], (service: GlobalConfService) => {
    expect(service).toBeTruthy();
  }));
});
