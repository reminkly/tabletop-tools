import { Component, OnInit } from '@angular/core';
import { TableBase } from '../../../classes/table-base';
import { Rumor } from '../../../interfaces/blades/rumor';

@Component({
  selector: 'app-blades-rumors-table',
  templateUrl: './rumors-table.component.html',
  styleUrls: ['./rumors-table.component.scss']
})
export class BladesRumorsTableComponent extends TableBase<Rumor> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    this.Headers = [
      'Text'
    ];
  }
}