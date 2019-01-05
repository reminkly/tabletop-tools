import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TableBase } from '../../../classes/table-base';
import { Faction } from '../../../interfaces/blades/faction';
import { BladesJsonService } from '../../../services/blades/blades-json.service';

@Component({
  selector: 'app-blades-faction-table',
  templateUrl: './faction-table.component.html',
  styleUrls: ['./faction-table.component.scss']
})
export class BladesFactionTableComponent extends TableBase<Faction> implements OnInit, AfterViewInit {
  constructor() {
    super();
  }

  ngOnInit() {
    this.Headers = [
      'Category',
      'Name',
      'Tier',
      'Hold',
      'Description',
      'Allies',
      'Enemies'
    ];
  }

  ngAfterViewInit() {
    this.Collection = new Set<Faction>(BladesJsonService.GetAllFactions());
    this.Update();
  }
}