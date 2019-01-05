import * as scores from '../../../json/blades/scores.json';

export class ScoresClientOrTargetList {
    public Civilian: string[];
    public Criminal: string[];
    public Political: string[];
    public Strange: string[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(scores)).default.ClientOrTarget;

        this.Civilian = theCopy.Civilian;
        this.Criminal = theCopy.Criminal;
        this.Political = theCopy.Political;
        this.Strange = theCopy.Strange;
    }
}
