import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladesStreetsTableComponent } from './streets-table.component';

describe('StreetsTableComponent', () => {
  let component: BladesStreetsTableComponent;
  let fixture: ComponentFixture<BladesStreetsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladesStreetsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladesStreetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
