import { Component, OnInit } from '@angular/core';
import { Demon } from '../../../interfaces/blades/demon';
import { TableBase } from '../../../classes/table-base';

@Component({
  selector: 'app-blades-demon-table',
  templateUrl: './demon-table.component.html',
  styleUrls: ['./demon-table.component.scss']
})
export class BladesDemonTableComponent extends TableBase<Demon> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    this.Headers = [
      'Aspect',
      'Affinity',
      'Desire',
      'SummonedHorrors',
      'Features'
    ];

    this.CustomSortAccessor = this.CustomSort;
  }

  private CustomSort(item: Demon, sortHeaderId: string): string | number {
    switch (sortHeaderId) {
      case 'Aspect': {
        return item.Type.Aspect;
      }
      case 'Affinity': {
        return item.Type.Affinity;
      }
      default: {
        return item[sortHeaderId];
      }
    }
  }
}