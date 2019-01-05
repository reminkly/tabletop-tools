import { Component, OnInit } from '@angular/core';
import { TableBase } from '../../../classes/table-base';
import { Ghost } from '../../../interfaces/blades/ghost';

@Component({
  selector: 'app-blades-ghosts-table',
  templateUrl: './ghosts-table.component.html',
  styleUrls: ['./ghosts-table.component.scss']
})
export class BladesGhostsTableComponent extends TableBase<Ghost> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    this.Headers = [
      'Traits',
      'SecondaryEffects'
    ];
  }
}