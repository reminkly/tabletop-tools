import { Component, OnInit } from '@angular/core';
import { TableBase } from '../../../classes/table-base';
import { CityOccurrence } from '../../../interfaces/blades/city-occurrence';

@Component({
  selector: 'app-blades-city-occurrences-table',
  templateUrl: './city-occurrences-table.component.html',
  styleUrls: ['./city-occurrences-table.component.scss']
})
export class BladesCityOccurrencesTableComponent extends TableBase<CityOccurrence> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    this.Headers = [
      'Text'
    ];
  }
}