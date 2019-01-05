import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladesGhostsTableComponent } from './ghosts-table.component';

describe('GhostsTableComponent', () => {
  let component: BladesGhostsTableComponent;
  let fixture: ComponentFixture<BladesGhostsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladesGhostsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladesGhostsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
