import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { Person } from '../../../interfaces/blades/person';
import { TableBase } from '../../../classes/table-base';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-blades-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss']
})
export class BladesPersonTableComponent extends TableBase<Person> implements OnInit, AfterViewInit {
  @ViewChild(MatSort) Sort;
  @ViewChild(MatPaginator) Paginator;

  constructor() {
    super();
  }

  ngOnInit() {
    this.Headers = [
      'Gender',
      'Looks',
      'Goals',
      'Methods',
      'CommonProfession',
      'RareProfession',
      'Heritage',
      'Styles',
      'Traits',
      'Interests',
      'Quirks'
    ];
  }

  ngAfterViewInit() {
    this.Data.sort = this.Sort;
    this.Data.paginator = this.Paginator;
  }
}