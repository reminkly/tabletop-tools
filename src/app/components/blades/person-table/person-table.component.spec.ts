import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladesPersonTableComponent } from './person-table.component';

describe('PersonTableComponent', () => {
  let component: BladesPersonTableComponent;
  let fixture: ComponentFixture<BladesPersonTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladesPersonTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladesPersonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
