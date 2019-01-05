import { BuildingExterior } from './building-exterior';

export interface Building {
    Exterior: BuildingExterior;
    CommonUse: string;
    RareUse: string;
    Details: string[];
    Items: string[];
}