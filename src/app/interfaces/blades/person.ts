import { Personality } from './personality';

export interface Person {
    Gender: string;
    Looks: string[];
    Goals: string[];
    Methods: string[];
    CommonProfession: string;
    RareProfession: string;
    Heritage: string;
    Styles: string[];
    Personality: Personality;
}
