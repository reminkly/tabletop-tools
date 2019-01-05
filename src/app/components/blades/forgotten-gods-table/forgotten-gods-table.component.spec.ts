import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladesForgottenGodsTableComponent } from './forgotten-gods-table.component';

describe('ForgottenGodsTableComponent', () => {
  let component: BladesForgottenGodsTableComponent;
  let fixture: ComponentFixture<BladesForgottenGodsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladesForgottenGodsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladesForgottenGodsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
