import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TableBase } from '../../../classes/table-base';
import { WorldLocation } from '../../../interfaces/blades/world-location';
import { MatPaginator, MatSort } from '@angular/material';
import { BladesJsonService } from '../../../services/blades/blades-json.service';

@Component({
  selector: 'app-blades-world-locations-table',
  templateUrl: './world-locations-table.component.html',
  styleUrls: ['./world-locations-table.component.scss']
})
export class BladesWorldLocationsTableComponent extends TableBase<WorldLocation> implements OnInit, AfterViewInit {
  @ViewChild(MatSort) Sort;
  @ViewChild(MatPaginator) Paginator;

  constructor() {
    super();
  }

  ngOnInit() {
    this.Headers = [
      'Name',
      'Description'
    ];
  }

  ngAfterViewInit() {
    this.Collection = new Set<WorldLocation>(BladesJsonService.GetAllWorldLocations());
    this.Update();
  }

}
