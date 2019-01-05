import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladesFactionTableComponent } from './faction-table.component';

describe('FactionTableComponent', () => {
  let component: BladesFactionTableComponent;
  let fixture: ComponentFixture<BladesFactionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladesFactionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladesFactionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
