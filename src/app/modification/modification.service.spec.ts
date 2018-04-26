import { TestBed, inject } from '@angular/core/testing';

import { ModificationListService } from './modification.service';

describe('ModificationListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModificationListService]
    });
  });

  it('should be created', inject([ModificationListService], (service: ModificationListService) => {
    expect(service).toBeTruthy();
  }));
});
