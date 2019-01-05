import { StreetImpression } from './street-impression';

export interface Street {
    Mood: string;
    Impression: StreetImpression;
    Use: string;
    Type: string;
    Details: string[];
    Props: string[];
}
