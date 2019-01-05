import * as buildings from '../../../json/blades/buildings.json';

export class BuildingsExteriorList {
    public Material: string[];
    public Details: string[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(buildings)).default.Exterior;

        this.Material = theCopy.Material;
        this.Details = theCopy.Details;
    }
}