import * as ghosts from '../../../json/blades/ghosts.json';

export class GhostsList {
    // Variables
    public Book: string;
    public Pages: string;
    public Traits: string[];
    public SecondaryEffects: string[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(ghosts)).default;

        this.Book = theCopy.Book;
        this.Pages = theCopy.Pages;
        this.Traits = theCopy.Traits;
        this.SecondaryEffects = theCopy.SecondaryEffects;
    }
}
