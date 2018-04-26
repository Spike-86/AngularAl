import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationActiveComponent } from './modification-active.component';

describe('ModificationActiveComponent', () => {
  let component: ModificationActiveComponent;
  let fixture: ComponentFixture<ModificationActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
