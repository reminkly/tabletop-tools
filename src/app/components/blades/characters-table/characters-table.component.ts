import { Component, OnInit, Input } from '@angular/core';
import { BladesCharacter } from '../../../interfaces/blades/blades-character';
import { TableBase } from '../../../classes/table-base';

@Component({
  selector: 'app-blades-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.scss']
})
export class BladesCharactersTableComponent extends TableBase<BladesCharacter> implements OnInit {
  @Input() useStarter: boolean;

  constructor() {
    super();
  }

  ngOnInit() {
    this.Headers = [
      'Name',
      'XPTrigger',
      'Actions',
      'Specials',
      'Items'
    ];
  }
}