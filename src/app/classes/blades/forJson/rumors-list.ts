import * as rumors from '../../../json/blades/rumors.json';

export class RumorsList {
    // Variables
    public Book: string;
    public Pages: string;
    public Rumors: string[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(rumors)).default;

        this.Book = theCopy.Book;
        this.Pages = theCopy.Pages;
        this.Rumors = theCopy.Rumors;
    }
}
