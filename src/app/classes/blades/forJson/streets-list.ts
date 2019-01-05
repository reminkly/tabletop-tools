import * as streets from '../../../json/blades/streets.json';
import { StreetsImpressionsList } from './streets-impressions-list.js';

export class StreetsList {
    // Variables
    public Book: string;
    public Pages: string;
    public Mood: string[];
    public Impressions: StreetsImpressionsList;
    public Use: string[];
    public Types: string[];
    public Details: string[];
    public Props: string[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(streets)).default;

        this.Book = theCopy.Book;
        this.Pages = theCopy.Pages;
        this.Mood = theCopy.Mood;
        this.Impressions = new StreetsImpressionsList();
        this.Use = theCopy.Use;
        this.Types = theCopy.Types;
        this.Details = theCopy.Details;
        this.Props = theCopy.Props;
    }
}