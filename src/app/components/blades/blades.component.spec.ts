import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladesComponent } from './blades.component';

describe('BladesComponent', () => {
  let component: BladesComponent;
  let fixture: ComponentFixture<BladesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
