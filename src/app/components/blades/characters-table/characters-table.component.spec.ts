import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladesCharactersTableComponent } from './characters-table.component';

describe('CharactersTableComponent', () => {
  let component: BladesCharactersTableComponent;
  let fixture: ComponentFixture<BladesCharactersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladesCharactersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladesCharactersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
