import * as scores from '../../../json/blades/scores.json';
import { ScoresClientOrTargetList } from './scores-client-or-target-list.js';
import { ScoresWorkList } from './scores-work-list.js';

export class ScoresList {
    // Variables
    public Book: string;
    public Pages: string;
    public ClientOrTarget: ScoresClientOrTargetList;
    public Work: ScoresWorkList;
    public TwistOrComplication: string[];
    public Connection: string[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(scores)).default;

        this.Book = theCopy.Book;
        this.Pages = theCopy.Pages;
        this.ClientOrTarget = new ScoresClientOrTargetList();
        this.Work = new ScoresWorkList();
        this.TwistOrComplication = theCopy.TwistOrComplication;
        this.Connection = theCopy.Connection;
    }
}
