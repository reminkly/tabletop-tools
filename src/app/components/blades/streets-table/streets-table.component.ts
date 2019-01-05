import { Component, OnInit } from '@angular/core';
import { TableBase } from '../../../classes/table-base';
import { Street } from '../../../interfaces/blades/street';

@Component({
  selector: 'app-blades-streets-table',
  templateUrl: './streets-table.component.html',
  styleUrls: ['./streets-table.component.scss']
})
export class BladesStreetsTableComponent extends TableBase<Street> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    this.Headers = [
      'Mood',
      'Sight',
      'Sound',
      'Smell',
      'Use',
      'Type',
      'Details',
      'Props'
    ];

    this.CustomSortAccessor = this.CustomSort;
  }

  private CustomSort(item: Street, sortHeaderId: string): string | number {
    switch (sortHeaderId) {
      case 'Sight': {
        return item.Impression.Sight;
      }
      case 'Sound': {
        return item.Impression.Sound;
      }
      case 'Smell': {
        return item.Impression.Smell;
      }
      default: {
        return item[sortHeaderId];
      }
    }
  }
}
