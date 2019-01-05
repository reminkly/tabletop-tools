import { Component, OnInit } from '@angular/core';
import { TableBase } from '../../../classes/table-base';
import { Cult } from '../../../interfaces/blades/cult';

@Component({
  selector: 'app-blades-cults-table',
  templateUrl: './cults-table.component.html',
  styleUrls: ['./cults-table.component.scss']
})
export class BladesCultsTableComponent extends TableBase<Cult> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    this.Headers = [
      'Type',
      'Action'
    ];
  }
}