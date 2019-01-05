import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BladesCityOccurrencesTableComponent } from './city-occurrences-table.component';

describe('CityOccurrencesTableComponent', () => {
  let component: BladesCityOccurrencesTableComponent;
  let fixture: ComponentFixture<BladesCityOccurrencesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BladesCityOccurrencesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BladesCityOccurrencesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
