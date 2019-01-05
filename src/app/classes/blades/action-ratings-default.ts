import { ActionRating } from '../../interfaces/blades/action-rating';

export class ActionRatingsDefault {
    constructor() {

    }

    public CreateDefaultRatings(): ActionRating[] {
        return [
            {
                Action: 'Attune',
                Value: 0
            },
            {
                Action: 'Command',
                Value: 0
            },
            {
                Action: 'Consort',
                Value: 0
            },
            {
                Action: 'Finesse',
                Value: 0
            },
            {
                Action: 'Hunt',
                Value: 0
            },
            {
                Action: 'Prowl',
                Value: 0
            },
            {
                Action: 'Skirmish',
                Value: 0
            },
            {
                Action: 'Study',
                Value: 0
            },
            {
                Action: 'Survey',
                Value: 0
            },
            {
                Action: 'Sway',
                Value: 0
            },
            {
                Action: 'Tinker',
                Value: 0
            },
            {
                Action: 'Wreck',
                Value: 0
            }
        ];
    }
}
