import * as scores from '../../../json/blades/scores.json';

export class ScoresWorkList {
    public Skullduggery: string[];
    public Violence: string[];
    public Underworld: string[];
    public Unnatural: string[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(scores)).default.Work;

        this.Skullduggery = theCopy.Skullduggery;
        this.Violence = theCopy.Violence;
        this.Underworld = theCopy.Underworld;
        this.Unnatural = theCopy.Unnatural;
    }
}
