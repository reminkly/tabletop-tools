import { ScoreClientOrTarget } from './score-client-or-target';
import { ScoreWork } from './score-work';

export interface Score {
    ClientOrTarget: ScoreClientOrTarget;
    Work: ScoreWork;
    TwistOrComplication: string;
    Connection: string;
}
