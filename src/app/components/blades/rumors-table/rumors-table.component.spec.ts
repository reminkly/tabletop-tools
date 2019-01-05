import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladesRumorsTableComponent } from './rumors-table.component';

describe('RumorsTableComponent', () => {
  let component: BladesRumorsTableComponent;
  let fixture: ComponentFixture<BladesRumorsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladesRumorsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladesRumorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
