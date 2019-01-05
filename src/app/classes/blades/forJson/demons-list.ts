import * as demons from '../../../json/blades/demons.json';
import { DemonTypesList } from './demon-types-list.js';

export class DemonsList {
    // Variables
    public Book: string;
    public Pages: string;
    public Types: DemonTypesList;
    public Desires: string[];
    public SummonedHorrors: string[];
    public Features: string[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(demons)).default;

        this.Book = theCopy.Book;
        this.Pages = theCopy.Pages;
        this.Types = new DemonTypesList();
        this.Desires = theCopy.Desires;
        this.SummonedHorrors = theCopy.SummonedHorrors;
        this.Features = theCopy.Features;
    }
}
