import * as cityOccurrences from '../../../json/blades/occurrences.json';

export class CityOccurrencesList {
    // Variables
    public Book: string;
    public Pages: string;
    public Occurrences: string[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(cityOccurrences)).default;

        this.Book = theCopy.Book;
        this.Pages = theCopy.Pages;
        this.Occurrences = theCopy.Occurrences;
    }
}
