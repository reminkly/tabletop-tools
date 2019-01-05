import { Component, OnInit } from '@angular/core';
import { Building } from '../../../interfaces/blades/building';
import { TableBase } from '../../../classes/table-base';

@Component({
  selector: 'app-blades-building-table',
  templateUrl: './building-table.component.html',
  styleUrls: ['./building-table.component.scss']
})
export class BladesBuildingTableComponent extends TableBase<Building> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    console.log('on view init');

    this.Headers = [
      'ExteriorMaterial',
      'ExteriorDetails',
      'CommonUse',
      'RareUse',
      'Details',
      'Items'
    ];

    this.CustomSortAccessor = this.CustomSort;
  }

  private CustomSort(item: Building, sortHeaderId: string): string | number {
    console.log(arguments);
    switch (sortHeaderId) {
      case 'ExteriorMaterial': {
        return item.Exterior.Material;
      }
      case 'ExteriorDetails': {
        return item.Exterior.Details;
      }
      default: {
        return item[sortHeaderId];
      }
    }
  }
}
