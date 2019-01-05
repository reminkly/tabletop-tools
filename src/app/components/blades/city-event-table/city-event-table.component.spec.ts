import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladesCityEventTableComponent } from './city-event-table.component';

describe('CityEventTableComponent', () => {
  let component: BladesCityEventTableComponent;
  let fixture: ComponentFixture<BladesCityEventTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladesCityEventTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladesCityEventTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
