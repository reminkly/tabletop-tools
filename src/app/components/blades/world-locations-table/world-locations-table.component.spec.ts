import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladesWorldLocationsTableComponent } from './world-locations-table.component';

describe('WorldLocationsTableComponent', () => {
  let component: BladesWorldLocationsTableComponent;
  let fixture: ComponentFixture<BladesWorldLocationsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladesWorldLocationsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladesWorldLocationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
