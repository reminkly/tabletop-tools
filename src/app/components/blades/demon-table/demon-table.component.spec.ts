import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BladesDemonTableComponent } from './demon-table.component';

describe('DemonTableComponent', () => {
  let component: BladesDemonTableComponent;
  let fixture: ComponentFixture<BladesDemonTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladesDemonTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladesDemonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
