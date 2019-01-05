import { DemonType } from './demon-type';

export interface Demon {
    Type: DemonType;
    Desire: string;
    SummonedHorrors: string[];
    Features: string[];
}
