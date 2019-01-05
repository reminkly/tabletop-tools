import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladesCultsTableComponent } from './cults-table.component';

describe('CultsTableComponent', () => {
  let component: BladesCultsTableComponent;
  let fixture: ComponentFixture<BladesCultsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladesCultsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladesCultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
