import * as characters from '../../../json/blades/playbooks/characters.json';
import { BladesCharacterPlaybook } from '../../../interfaces/blades/blades-character-playbook.js';

export class CharactersList {
    // Variables
    public Playbooks: BladesCharacterPlaybook[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(characters)).default.Playbooks;

        this.Playbooks = [];

        theCopy.forEach(p => {
            this.Playbooks.push({
                Book: p.Book,
                Pages: p.Pages,
                Name: p.Name,
                XPTrigger: p.XPTrigger,
                Actions: p.Actions,
                Starters: p.Starters,
                Specials: p.Specials,
                Items: p.Items
            });
        }, this);
    }
}
