import { Injectable } from '@angular/core';
import { Person } from '../../interfaces/blades/person';
import { PeopleList } from '../../classes/blades/forJson/people-list';
import { DiceService } from '../dice.service';
import { RollResult } from '../../interfaces/roll-result';
import { Personality } from '../../interfaces/blades/personality';
import { PersonalityList } from '../../classes/blades/forJson/personality-list';
import { BuildingExterior } from '../../interfaces/blades/building-exterior';
import { BuildingsExteriorList } from '../../classes/blades/forJson/buildings-exterior-list';
import { Building } from '../../interfaces/blades/building';
import { BuildingsList } from '../../classes/blades/forJson/buildings-list';
import { DemonType } from '../../interfaces/blades/demon-type';
import { DemonTypesList } from '../../classes/blades/forJson/demon-types-list';
import { Demon } from '../../interfaces/blades/demon';
import { DemonsList } from '../../classes/blades/forJson/demons-list';
import { CityEvent } from '../../interfaces/blades/city-event';
import { CityEventsList } from '../../classes/blades/forJson/city-events-list';
import { FactionsList } from '../../classes/blades/forJson/factions-list';
import { Faction } from '../../interfaces/blades/faction';
import { Cult } from '../../interfaces/blades/cult';
import { ForgottenGodsList } from '../../classes/blades/forJson/forgotten-gods-list';
import { ForgottenGod } from '../../interfaces/blades/forgotten-god';
import { Ghost } from '../../interfaces/blades/ghost';
import { GhostsList } from '../../classes/blades/forJson/ghosts-list';
import { WorldLocation } from '../../interfaces/blades/world-location';
import { WorldLocationsList } from '../../classes/blades/forJson/world-locations-list';
import { CityOccurrence } from '../../interfaces/blades/city-occurrence';
import { CityOccurrencesList } from '../../classes/blades/forJson/city-occurrences-list';
import { RumorsList } from '../../classes/blades/forJson/rumors-list';
import { Rumor } from '../../interfaces/blades/rumor';
import { ScoreClientOrTarget } from '../../interfaces/blades/score-client-or-target';
import { ScoresClientOrTargetList } from '../../classes/blades/forJson/scores-client-or-target-list';
import { ScoresWorkList } from '../../classes/blades/forJson/scores-work-list';
import { ScoreWork } from '../../interfaces/blades/score-work';
import { ScoresList } from '../../classes/blades/forJson/scores-list';
import { Score } from '../../interfaces/blades/score';
import { StreetImpression } from '../../interfaces/blades/street-impression';
import { StreetsImpressionsList } from '../../classes/blades/forJson/streets-impressions-list';
import { StreetsList } from '../../classes/blades/forJson/streets-list';
import { Street } from '../../interfaces/blades/street';
import { Vice } from '../../interfaces/blades/vice';
import { VicesList } from '../../classes/blades/forJson/vices-list';

@Injectable({
  providedIn: 'root'
})
export class BladesJsonService {
  // Constructors
  constructor() {

  }

  // Methods
  public static RandomizeBuilding(): Building {
    // Create the JSON list.
    const buildings: BuildingsList = new BuildingsList();

    // Define the dice.
    let roll: RollResult;

    // Define the variables.
    let commonUse: string;
    let rareUse: string;
    const details = new Set<string>();
    const items = new Set<string>();

    // Common Use
    roll = DiceService.Roll(1, buildings.CommonUse.length);
    commonUse = buildings.CommonUse[roll.Rolls[0] - 1];

    // Common Use
    roll = DiceService.Roll(1, buildings.RareUse.length);
    rareUse = buildings.RareUse[roll.Rolls[0] - 1];

    // Details
    roll = DiceService.Roll(3, buildings.Details.length);
    roll.Rolls.forEach(x => {
      details.add(buildings.Details[x - 1]);
    }, this);

    // Items
    roll = DiceService.Roll(3, buildings.Items.length);
    roll.Rolls.forEach(x => {
      items.add(buildings.Items[x - 1]);
    }, this);

    const result: Building = {
      Exterior: this.RandomizeBuildingExterior(),
      CommonUse: commonUse,
      RareUse: rareUse,
      Details: Array.from(details.values()),
      Items: Array.from(items.values())
    };

    return result;
  }

  public static RandomizeBuildingExterior(): BuildingExterior {
    // Create the JSON list.
    const exterior: BuildingsExteriorList = new BuildingsExteriorList();

    // Define the dice.
    let roll: RollResult;

    // Define the variables.
    let material: string;
    let details: string;

    // Material
    roll = DiceService.Roll(1, exterior.Material.length);
    material = exterior.Material[roll.Rolls[0] - 1];

    // Details
    roll = DiceService.Roll(1, exterior.Details.length);
    details = exterior.Details[roll.Rolls[0] - 1];

    const result: BuildingExterior = {
      Material: material,
      Details: details
    };

    return result;
  }

  public static RandomizeDemon(): Demon {
    // Create the JSON list.
    const demons: DemonsList = new DemonsList();

    // Define the dice.
    let roll: RollResult;

    // Define the variables.
    let desire: string;
    const summonedHorrors = new Set<string>();
    const features = new Set<string>();

    // Desire
    roll = DiceService.Roll(1, demons.Desires.length);
    desire = demons.Desires[roll.Rolls[0] - 1];

    // Summoned Horrors
    roll = DiceService.Roll(3, demons.SummonedHorrors.length);
    roll.Rolls.forEach(x => {
      summonedHorrors.add(demons.SummonedHorrors[x - 1]);
    }, this);

    // Features
    roll = DiceService.Roll(3, demons.Features.length);
    roll.Rolls.forEach(x => {
      features.add(demons.Features[x - 1]);
    }, this);

    const result: Demon = {
      Type: this.RandomizeDemonType(),
      Desire: desire,
      SummonedHorrors: Array.from(summonedHorrors.values()),
      Features: Array.from(features.values())
    };

    return result;
  }

  public static RandomizeDemonType(): DemonType {
    // Create the JSON list.
    const types: DemonTypesList = new DemonTypesList();

    // Define the dice.
    let roll: RollResult;

    // Define the variables.
    let aspect: string;
    let affinity: string;

    // Aspect
    roll = DiceService.Roll(1, types.Aspect.length);
    aspect = types.Aspect[roll.Rolls[0] - 1];

    // Affinity
    roll = DiceService.Roll(1, types.Affinity.length);
    affinity = types.Affinity[roll.Rolls[0] - 1];

    const result: DemonType = {
      Aspect: aspect,
      Affinity: affinity
    };

    return result;
  }

  public static RandomizeCityEvent(): CityEvent {
    // Create the JSON list.
    const cityEvents: CityEventsList = new CityEventsList();

    // Define the dice.
    let roll: RollResult;

    // City Event
    roll = DiceService.Roll(1, cityEvents.Events.length);

    const result: CityEvent = {
      Text: cityEvents.Events[roll.Rolls[0] - 1]
    };

    return result;
  }

  public static RandomizeFaction(): Faction {
    // Create the JSON list.
    const factions: FactionsList = new FactionsList();

    // Define the dice.
    let roll: RollResult;
    let category: Faction[];

    // Choose the faction category.
    roll = DiceService.Roll(1, factions.Categories);
    
    switch (roll.Rolls[0]) {
      case 1:
        category = factions.Underworld;
        break;
      
      case 2:
        category = factions.Institutions;
        break;

      case 3:
        category = factions.LaborTrade;
        break;

      case 4:
        category = factions.Citizenry;
        break;

      case 5:
        category = factions.Fringe;
        break;
    }

    roll = DiceService.Roll(1, category.length);
    
    return category[roll.Rolls[0] - 1];
  }

  public static GetAllFactions(): Faction[] {
    // Create the JSON list.
    const factions: FactionsList = new FactionsList();
    
    const results = new Set<Faction>();

    factions.Citizenry.forEach(x => {
      results.add(x);
    }, this);

    factions.Fringe.forEach(x => {
      results.add(x);
    }, this);

    factions.Institutions.forEach(x => {
      results.add(x);
    }, this);

    factions.LaborTrade.forEach(x => {
      results.add(x);
    }, this);

    factions.Underworld.forEach(x => {
      results.add(x);
    }, this);

    return Array.from(results.values());
  }

  public static RandomizeForgottenGod(): ForgottenGod {
    // Create the JSON list.
    const gods: ForgottenGodsList = new ForgottenGodsList();

    // Define the dice.
    let roll: RollResult;

    roll = DiceService.Roll(1, gods.Gods.length);

    const result: ForgottenGod = {
      Title: gods.Gods[roll.Rolls[0] - 1],
      Cult: this.RandomizeCult()
    };

    return result;
  }

  public static RandomizeCult(): Cult {
    // Create the JSON list.
    const gods: ForgottenGodsList = new ForgottenGodsList();

    // Define the dice.
    let roll: RollResult;

    roll = DiceService.Roll(1, gods.Cults.length);
    
    return gods.Cults[roll.Rolls[0] - 1];
  }

  public static RandomizeGhost(): Ghost {
    // Create the JSON list.
    const ghosts: GhostsList = new GhostsList();

    // Define the dice.
    let roll: RollResult;

    // Define the variables.
    const traits = new Set<string>();
    const secondaryEffects = new Set<string>();

    // Traits
    roll = DiceService.Roll(3, ghosts.Traits.length);
    roll.Rolls.forEach(x => {
      traits.add(ghosts.Traits[x - 1]);
    }, this);

    // Secondary Effects
    roll = DiceService.Roll(3, ghosts.SecondaryEffects.length);
    roll.Rolls.forEach(x => {
      secondaryEffects.add(ghosts.SecondaryEffects[x - 1]);
    }, this);

    const result: Ghost = {
      Traits: Array.from(traits.values()),
      SecondaryEffects: Array.from(secondaryEffects.values())
    };

    return result;
  }

  public static RandomizeWorldLocation(): WorldLocation {
    // Create the JSON list.
    const locations: WorldLocationsList = new WorldLocationsList();

    // Define the dice.
    let roll: RollResult;

    // Define the variables.
    let category: WorldLocation[];

    // Choose a category.
    roll = DiceService.Roll(1, locations.Categories);

    switch (roll.Rolls[0]) {
      case 1:
        category = locations.Doskvol;
        break;
      
      case 2:
        category = locations.ShatteredIsles;
        break;
    }

    // Location
    roll = DiceService.Roll(1, category.length);

    return category[roll.Rolls[0] - 1];
  }

  public static GetAllWorldLocations(): WorldLocation[] {
    const locations: WorldLocationsList = new WorldLocationsList();

    const results = new Set<WorldLocation>();

    locations.Doskvol.forEach(x => {
      results.add(x);
    }, this);

    locations.ShatteredIsles.forEach(x => {
      results.add(x);
    }, this);

    return Array.from(results.values());
  }

  public static RandomizeCityOccurrence(): CityOccurrence {
    // Create the JSON list.
    const occurrences: CityOccurrencesList = new CityOccurrencesList();

    // Define the dice.
    let roll: RollResult;

    roll = DiceService.Roll(1, occurrences.Occurrences.length);

    const result: CityOccurrence = {
      Text: occurrences.Occurrences[roll.Rolls[0] - 1]
    };

    return result;
  }

  public static RandomizePerson(): Person {
    // Create the JSON list.
    const people: PeopleList = new PeopleList();

    // Define the dice.
    let roll: RollResult;

    // Define the variables.
    let gender: string;
    const looks = new Set<string>();
    const goals = new Set<string>();
    const methods = new Set<string>();
    let commonProfession: string;
    let rareProfession: string;
    let heritage: string;
    const styles = new Set<string>();

    // Gender
    roll = DiceService.Roll(1, people.Gender.length);
    gender = people.Gender[roll.Rolls[0] - 1];

    // Looks
    roll = DiceService.Roll(3, people.Looks.length);
    roll.Rolls.forEach(x => {
      looks.add(people.Looks[x - 1]);
    }, this);

    // Goals
    roll = DiceService.Roll(2, people.Goals.length);
    roll.Rolls.forEach(x => {
      goals.add(people.Goals[x - 1]);
    }, this);

    // Methods
    roll = DiceService.Roll(2, people.Methods.length);
    roll.Rolls.forEach(x => {
      methods.add(people.Methods[x - 1]);
    }, this);

    // Common Professions
    roll = DiceService.Roll(1, people.CommonProfessions.length);
    commonProfession = people.CommonProfessions[roll.Rolls[0] - 1];

    // Rare Professions
    roll = DiceService.Roll(1, people.RareProfessions.length);
    rareProfession = people.RareProfessions[roll.Rolls[0] - 1];

    // Heritage
    roll = DiceService.Roll(1, people.Heritages.length);
    heritage = people.Heritages[roll.Rolls[0] - 1];

    // Styles
    roll = DiceService.Roll(3, people.Styles.length);
    roll.Rolls.forEach(x => {
      styles.add(people.Styles[x - 1]);
    }, this);

    const result: Person = {
      Gender: gender,
      Looks: Array.from(looks.values()),
      Goals: Array.from(goals.values()),
      Methods: Array.from(methods.values()),
      CommonProfession: commonProfession,
      RareProfession: rareProfession,
      Heritage: heritage,
      Styles: Array.from(styles.values()),
      Personality: this.RandomizePersonality()
    };

    return result;
  }

  public static RandomizePersonality(): Personality {
    // Create the JSON list.
    const personalities: PersonalityList = new PersonalityList();

    // Define the dice.
    let roll: RollResult;

    // Define the variables.
    const traits = new Set<string>();
    const interests = new Set<string>();
    const quirks = new Set<string>();

    // Traits
    roll = DiceService.Roll(3, personalities.Traits.length);
    roll.Rolls.forEach(x => {
      traits.add(personalities.Traits[x - 1]);
    }, this);

    // Interests
    roll = DiceService.Roll(2, personalities.Interests.length);
    roll.Rolls.forEach(x => {
      interests.add(personalities.Interests[x - 1]);
    }, this);

    // Quirks
    roll = DiceService.Roll(3, personalities.Quirks.length);
    roll.Rolls.forEach(x => {
      quirks.add(personalities.Quirks[x - 1]);
    }, this);

    const result: Personality = {
      Traits: Array.from(traits.values()),
      Interests: Array.from(interests.values()),
      Quirks: Array.from(quirks.values())
    };

    return result;
  }

  public static RandomizeRumor(): Rumor {
    // Create the JSON list.
    const rumors: RumorsList = new RumorsList();

    // Define the dice.
    let roll: RollResult;

    roll = DiceService.Roll(1, rumors.Rumors.length);

    const result: Rumor = {
      Text: rumors.Rumors[roll.Rolls[0] - 1]
    };

    return result;
  }

  public static RandomizeScore(): Score {
    // Create the JSON list.
    const scores: ScoresList = new ScoresList();

    // Define the dice.
    let roll: RollResult;

    // Define the variables.
    let twistOrComplication: string;
    let connection: string;

    // Twist or Complication
    roll = DiceService.Roll(1, scores.TwistOrComplication.length);
    twistOrComplication = scores.TwistOrComplication[roll.Rolls[0] - 1];

    // Connection
    roll = DiceService.Roll(1, scores.Connection.length);
    connection = scores.Connection[roll.Rolls[0] - 1];

    const result: Score = {
      ClientOrTarget: this.RandomizeScoreClientOrTarget(),
      Work: this.RandomizeScoreWork(),
      TwistOrComplication: twistOrComplication,
      Connection: connection
    };

    return result;
  }

  public static RandomizeScoreClientOrTarget(): ScoreClientOrTarget {
    // Create the JSON list.
    const clients: ScoresClientOrTargetList = new ScoresClientOrTargetList();

    // Define the dice.
    let roll: RollResult;

    // Define the variables.
    let civilian: string;
    let criminal: string;
    let political: string;
    let strange: string;

    // Civilian
    roll = DiceService.Roll(1, clients.Civilian.length);
    civilian = clients.Civilian[roll.Rolls[0] - 1];

    // Criminal
    roll = DiceService.Roll(1, clients.Criminal.length);
    criminal = clients.Criminal[roll.Rolls[0] - 1];

    // Political
    roll = DiceService.Roll(1, clients.Political.length);
    political = clients.Political[roll.Rolls[0] - 1];

    // Strange
    roll = DiceService.Roll(1, clients.Strange.length);
    strange = clients.Strange[roll.Rolls[0] - 1];

    const result: ScoreClientOrTarget = {
      Civilian: civilian,
      Criminal: criminal,
      Political: political,
      Strange: strange
    };

    return result;
  }

  public static RandomizeScoreWork(): ScoreWork {
    // Create the JSON list.
    const scoreWork: ScoresWorkList = new ScoresWorkList();

    // Define the dice.
    let roll: RollResult;

    // Define the variables.
    let skullduggery: string;
    let violence: string;
    let underworld: string;
    let unnatural: string;

    // Skullduggery
    roll = DiceService.Roll(1, scoreWork.Skullduggery.length);
    skullduggery = scoreWork.Skullduggery[roll.Rolls[0] - 1];

    // Violence
    roll = DiceService.Roll(1, scoreWork.Violence.length);
    violence = scoreWork.Violence[roll.Rolls[0] - 1];

    // Underworld
    roll = DiceService.Roll(1, scoreWork.Underworld.length);
    underworld = scoreWork.Underworld[roll.Rolls[0] - 1];

    // Unnatural
    roll = DiceService.Roll(1, scoreWork.Unnatural.length);
    unnatural = scoreWork.Unnatural[roll.Rolls[0] - 1];

    const result: ScoreWork = {
      Skullduggery: skullduggery,
      Violence: violence,
      Underworld: underworld,
      Unnatural: unnatural
    };

    return result;
  }

  public static RandomizeStreet(): Street {
    // Create the JSON list.
    const streets: StreetsList = new StreetsList();

    // Define the dice.
    let roll: RollResult;

    // Define the variables.
    let mood: string;
    let use: string;
    let type: string;
    const details = new Set<string>();
    const props = new Set<string>();

    // Mood
    roll = DiceService.Roll(1, streets.Mood.length);
    mood = streets.Mood[roll.Rolls[0] - 1];

    // Use
    roll = DiceService.Roll(1, streets.Use.length);
    use = streets.Use[roll.Rolls[0] - 1];

    // Type
    roll = DiceService.Roll(1, streets.Types.length);
    type = streets.Types[roll.Rolls[0] - 1];

    // Details
    roll = DiceService.Roll(3, streets.Details.length);
    roll.Rolls.forEach(x => {
      details.add(streets.Details[x - 1]);
    }, this);

    // Props
    roll = DiceService.Roll(3, streets.Props.length);
    roll.Rolls.forEach(x => {
      props.add(streets.Props[x - 1]);
    }, this);

    const result: Street = {
      Mood: mood,
      Impression: this.RandomizeStreetImpression(),
      Use: use,
      Type: type,
      Details: Array.from(details.values()),
      Props: Array.from(props.values())
    };

    return result;
  }

  public static RandomizeStreetImpression(): StreetImpression {
    // Create the JSON list.
    const impressions: StreetsImpressionsList = new StreetsImpressionsList();

    // Define the dice.
    let roll: RollResult;

    // Define the variables.
    let sight: string;
    let sound: string;
    let smell: string;

    // Sights
    roll = DiceService.Roll(1, impressions.Sights.length);
    sight = impressions.Sights[roll.Rolls[0] - 1];

    // Sounds
    roll = DiceService.Roll(1, impressions.Sounds.length);
    sound = impressions.Sounds[roll.Rolls[0] - 1];

    // Smells
    roll = DiceService.Roll(1, impressions.Smells.length);
    smell = impressions.Smells[roll.Rolls[0] - 1];

    const result: StreetImpression = {
      Sight: sight,
      Sound: sound,
      Smell: smell
    };

    return result;
  }

  public static RandomizeVice(): Vice {
    // Create the JSON list.
    const vice: VicesList = new VicesList();

    // Define the dice.
    let roll: RollResult;

    // Vices
    roll = DiceService.Roll(1, vice.Vices.length);

    const result: Vice = vice.Vices[roll.Rolls[0] - 1];

    return result;
  }
}