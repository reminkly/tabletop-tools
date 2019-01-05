import * as factions from '../../../json/blades/factions.json';
import { Faction } from '../../../interfaces/blades/faction.js';

export class FactionsList {
    public Book: string;
    public Pages: string;
    public Categories: number;
    public Underworld: Faction[];
    public Institutions: Faction[];
    public LaborTrade: Faction[];
    public Citizenry: Faction[];
    public Fringe: Faction[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(factions)).default;

        this.Book = theCopy.Book;
        this.Pages = theCopy.Pages;
        this.Categories = 0;
        this.Underworld = [];
        this.Institutions = [];
        this.LaborTrade = [];
        this.Citizenry = [];
        this.Fringe = [];

        // Add the factions by type.
        theCopy.Underworld.forEach(f => {
            this.Underworld.push({
                Category: 'Underworld',
                Name: f.Name,
                Tier: f.Tier,
                Hold: f.Hold,
                Description: f.Description,
                Allies: f.Allies,
                Enemies: f.Enemies
            });
        }, this);
        this.Categories++;

        theCopy.Institutions.forEach(f => {
            this.Institutions.push({
                Category: 'Institutions',
                Name: f.Name,
                Tier: f.Tier,
                Hold: f.Hold,
                Description: f.Description,
                Allies: f.Allies,
                Enemies: f.Enemies
            });
        }, this);
        this.Categories++;

        theCopy.LaborTrade.forEach(f => {
            this.LaborTrade.push({
                Category: 'Labor or Trade',
                Name: f.Name,
                Tier: f.Tier,
                Hold: f.Hold,
                Description: f.Description,
                Allies: f.Allies,
                Enemies: f.Enemies
            });
        }, this);
        this.Categories++;

        theCopy.Citizenry.forEach(f => {
            this.Citizenry.push({
                Category: 'Citizenry',
                Name: f.Name,
                Tier: f.Tier,
                Hold: f.Hold,
                Description: f.Description,
                Allies: f.Allies,
                Enemies: f.Enemies
            });
        }, this);
        this.Categories++;

        theCopy.Fringe.forEach(f => {
            this.Fringe.push({
                Category: 'Fringe',
                Name: f.Name,
                Tier: f.Tier,
                Hold: f.Hold,
                Description: f.Description,
                Allies: f.Allies,
                Enemies: f.Enemies
            });
        }, this);
        this.Categories++;
    }
}
