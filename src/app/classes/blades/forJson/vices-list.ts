import * as vice from '../../../json/blades/vice.json';
import { Vice } from '../../../interfaces/blades/vice.js';

export class VicesList {
    // Variables
    Book: string;
    Pages: string;
    Vices: Vice[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(vice)).default;

        this.Book = theCopy.Book;
        this.Pages = theCopy.Pages;

        theCopy.Vices.forEach(x => {
            this.Vices.push(x);
        });
    }
}
