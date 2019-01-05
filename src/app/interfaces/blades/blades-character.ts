import { ActionRating } from './action-rating';
import { BladesSpecialAbility } from './blades-special-ability';
import { BladesCharacterItem } from './blades-character-item';
import { BladesCharacterStartingSet } from './blades-character-starting-set';

export interface BladesCharacter {
    Name: string;
    XPTrigger: string;
    Actions: ActionRating[];
    Specials: BladesSpecialAbility[];
    Items: BladesCharacterItem[];
}