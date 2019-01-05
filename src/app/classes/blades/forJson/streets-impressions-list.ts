import * as streets from '../../../json/blades/streets.json';

export class StreetsImpressionsList {
    // Variables
    public Sights: string[];
    public Sounds: string[];
    public Smells: string[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(streets)).default.Impressions;

        this.Sights = theCopy.Sights;
        this.Sounds = theCopy.Sounds;
        this.Smells = theCopy.Smells;
    }
}
