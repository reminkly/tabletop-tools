import { Component, OnInit } from '@angular/core';
import { TableBase } from '../../../classes/table-base';
import { ForgottenGod } from '../../../interfaces/blades/forgotten-god';

@Component({
  selector: 'app-blades-forgotten-gods-table',
  templateUrl: './forgotten-gods-table.component.html',
  styleUrls: ['./forgotten-gods-table.component.scss']
})
export class BladesForgottenGodsTableComponent extends TableBase<ForgottenGod> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    this.Headers = [
      'Title',
      'Type',
      'Action'
    ];

    this.CustomSortAccessor = this.CustomSort;
  }

  private CustomSort(item: ForgottenGod, sortHeaderId: string): string | number {
    switch (sortHeaderId) {
      case 'Type': {
        return item.Cult.Type;
      }
      case 'Action': {
        return item.Cult.Action;
      }
      default: {
        return item[sortHeaderId];
      }
    }
  }
}
