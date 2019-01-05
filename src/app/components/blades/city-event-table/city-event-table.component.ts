import { Component, OnInit } from '@angular/core';
import { CityEvent } from '../../../interfaces/blades/city-event';
import { TableBase } from '../../../classes/table-base';

@Component({
  selector: 'app-blades-city-event-table',
  templateUrl: './city-event-table.component.html',
  styleUrls: ['./city-event-table.component.scss']
})
export class BladesCityEventTableComponent extends TableBase<CityEvent> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    this.Headers = [
      'Text'
    ];
  }
}