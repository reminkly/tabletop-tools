import { Injectable } from '@angular/core';
import { RollResult } from '../../interfaces/roll-result.js';
import { CharactersList } from '../../classes/blades/forJson/characters-list.js';
import { BladesCharacter } from '../../interfaces/blades/blades-character.js';
import { ActionRating } from '../../interfaces/blades/action-rating.js';
import { BladesCharacterItem } from '../../interfaces/blades/blades-character-item.js';
import { DiceService } from '../dice.service.js';
import { BladesCharacterPlaybook } from '../../interfaces/blades/blades-character-playbook.js';
import { BladesSpecialAbility } from '../../interfaces/blades/blades-special-ability.js';
import { BladesCharacterStartingSet } from '../../interfaces/blades/blades-character-starting-set.js';
import { ActionRatingsDefault } from '../../classes/blades/action-ratings-default.js';

@Injectable({
  providedIn: 'root'
})
export class BladesCharacterService {
  constructor() {

  }

  // Methods
  public static RandomizePlaybook(useStarter: boolean = true): BladesCharacter {
    // Create the JSON list.
    const characters: CharactersList = new CharactersList();

    // Define the dice.
    let roll: RollResult;

    // Define the variables.
    let playbook: BladesCharacterPlaybook;
    let name: string;
    let xpTrigger: string;
    const actions: ActionRating[] = [];
    let action: ActionRating;
    const specials: BladesSpecialAbility[] = [];
    let special: BladesSpecialAbility;
    let items: BladesCharacterItem[];

    // Choose a playbook.
    roll = DiceService.Roll(1, characters.Playbooks.length);
    playbook = characters.Playbooks[roll.Rolls[0] - 1];

    // Name
    name = playbook.Name;

    // XP Trigger
    xpTrigger = playbook.XPTrigger;

    // Initial actions.
    playbook.Actions.forEach(x => {
      actions.push(x);
    }, this);

    // Adjust initial attributes and choose a special ability.
    if (useStarter) {
      let starter: BladesCharacterStartingSet;

      roll = DiceService.Roll(1, playbook.Starters.length);
      starter = playbook.Starters[roll.Rolls[0] - 1];

      // Adjust the starting actions.
      starter.Adjustments.forEach(x => {
        action = actions.find(a => a.Action === x.Action);

        if (action) {
          action.Value += x.Value;
        } else {
          actions.push(x);
        }
      }, this);

      // Add the special.
      special = playbook.Specials.find(x => x.Name === starter.Special);
      specials.push(special);
    } else {
      let pointsRemaining = 4;

      const allActions: ActionRating[] = new ActionRatingsDefault().CreateDefaultRatings();
      let foundAction: ActionRating;

      while (pointsRemaining > 0) {
        roll = DiceService.Roll(1, allActions.length);
        action = allActions[roll.Rolls[0] - 1];
        
        foundAction = actions.find(x => x.Action === action.Action);
        if (foundAction) {
          if (foundAction.Value < 3) {
            foundAction.Value++;
            pointsRemaining--;
          } else {
            continue;
          }
        } else {
          action.Value++;
          actions.push(action);
          pointsRemaining--;
        }
      }

      roll = DiceService.Roll(1, playbook.Specials.length);
      special = playbook.Specials[roll.Rolls[0] - 1];
      specials.push(special);
    }

    // Items.
    items = playbook.Items;

    const result: BladesCharacter = {
      Name: name,
      XPTrigger: xpTrigger,
      Actions: actions,
      Specials: specials,
      Items: items
    };

    return result;
  }
}
