import * as locations from '../../../json/blades/locations.json';
import { WorldLocation } from '../../../interfaces/blades/world-location.js';

export class WorldLocationsList {
    // Variables
    public Book: string;
    public Pages: string;
    public Categories: number;
    public Doskvol: WorldLocation[];
    public ShatteredIsles: WorldLocation[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(locations)).default;

        this.Book = theCopy.Book;
        this.Pages = theCopy.Pages;
        this.Categories = 0;
        this.Doskvol = [];
        this.ShatteredIsles = [];

        theCopy.Doskvol.forEach(d => {
            this.Doskvol.push({
                Name: d.Name,
                Description: d.Description
            });
        }, this);
        this.Categories++;

        theCopy.ShatteredIsles.forEach(s => {
            this.ShatteredIsles.push({
                Name: s.Name,
                Description: s.Description
            });
        }, this);
        this.Categories++;
    }
}
