import { ActionRating } from './action-rating';
import { BladesSpecialAbility } from './blades-special-ability';
import { BladesCharacterItem } from './blades-character-item';
import { BladesCharacterStartingSet } from './blades-character-starting-set';

export interface BladesCharacterPlaybook {
    Book: string;
    Pages: string;
    Name: string;
    XPTrigger: string;
    Actions: ActionRating[];
    Starters: BladesCharacterStartingSet[];
    Specials: BladesSpecialAbility[];
    Items: BladesCharacterItem[];
}