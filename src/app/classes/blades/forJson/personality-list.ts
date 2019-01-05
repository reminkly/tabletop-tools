import * as personalities from '../../../json/blades/personalities.json';

export class PersonalityList {
    // Variables
    public Book: string;
    public Pages: string;
    public Traits: string[];
    public Interests: string[];
    public Quirks: string[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(personalities)).default;

        this.Book = theCopy.Book;
        this.Pages = theCopy.Pages;
        this.Traits = theCopy.Traits;
        this.Interests = theCopy.Interests;
        this.Quirks = theCopy.Quirks;
    }
}
