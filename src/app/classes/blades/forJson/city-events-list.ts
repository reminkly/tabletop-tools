import * as cityEvents from '../../../json/blades/events.json';

export class CityEventsList {
    // Variables
    public Book: string;
    public Pages: string;
    public Events: string[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(cityEvents)).default;

        this.Book = theCopy.Book;
        this.Pages = theCopy.Pages;
        this.Events = theCopy.Events;
    }
}
