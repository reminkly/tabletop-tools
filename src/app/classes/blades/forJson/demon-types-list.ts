import * as demons from '../../../json/blades/demons.json';

export class DemonTypesList {
    // Variables
    public Aspect: string[];
    public Affinity: string[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(demons)).default.Types;

        this.Aspect = theCopy.Aspect;
        this.Affinity = theCopy.Affinity;
    }
}
