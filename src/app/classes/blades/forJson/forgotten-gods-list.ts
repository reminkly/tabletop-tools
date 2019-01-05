import * as forgottenGods from '../../../json/blades/forgotten_gods.json';
import { Cult } from '../../../interfaces/blades/cult.js';

export class ForgottenGodsList {
    public Book: string;
    public Pages: string;
    public Gods: string[];
    public Cults: Cult[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(forgottenGods)).default;

        this.Book = theCopy.Book;
        this.Pages = theCopy.Pages;
        this.Gods = theCopy.Gods;
        this.Cults = [];

        theCopy.Cults.forEach(c => {
            this.Cults.push({
                Type: c.Type,
                Action: c.Action
            });
        }, this);
    }
}
