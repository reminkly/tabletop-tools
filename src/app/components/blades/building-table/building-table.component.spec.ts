import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladesBuildingTableComponent } from './building-table.component';

describe('BladesBuildingTableComponent', () => {
  let component: BladesBuildingTableComponent;
  let fixture: ComponentFixture<BladesBuildingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladesBuildingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladesBuildingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
