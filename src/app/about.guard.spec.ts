import { TestBed, async, inject } from '@angular/core/testing';

import { AboutGuard } from './about.guard';

describe('AboutGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutGuard]
    });
  });

  it('should ...', inject([AboutGuard], (guard: AboutGuard) => {
    expect(guard).toBeTruthy();
  }));
});
