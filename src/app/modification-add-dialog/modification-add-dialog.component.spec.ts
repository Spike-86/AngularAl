import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationAddDialogComponent } from './modification-add-dialog.component';

describe('ModificationAddDialogComponent', () => {
  let component: ModificationAddDialogComponent;
  let fixture: ComponentFixture<ModificationAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
