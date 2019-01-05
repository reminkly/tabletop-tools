import * as buildings from '../../../json/blades/buildings.json';
import { BuildingsExteriorList } from './buildings-exterior-list.js';

export class BuildingsList {
    // Variables
    public Book: string;
    public Pages: string;
    public Exterior: BuildingsExteriorList;
    public CommonUse: string[];
    public RareUse: string[];
    public Details: string[];
    public Items: string[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(buildings)).default;

        this.Book = theCopy.Book;
        this.Pages = theCopy.Pages;
        this.CommonUse = theCopy.CommonUse;
        this.RareUse = theCopy.RareUse;
        this.Details = theCopy.Details;
        this.Items = theCopy.Items;

        this.Exterior = new BuildingsExteriorList();
    }
}
