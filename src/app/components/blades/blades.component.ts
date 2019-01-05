import { Component, OnInit, ViewChild } from '@angular/core';
import { DiceService } from '../../services/dice.service';
import { BladesJsonService } from '../../services/blades/blades-json.service';
import { Person } from '../../interfaces/blades/person';
import { BladesPersonTableComponent } from './person-table/person-table.component';
import { BladesBuildingTableComponent } from './building-table/building-table.component';
import { Building } from '../../interfaces/blades/building';
import { BladesDemonTableComponent } from './demon-table/demon-table.component';
import { Demon } from '../../interfaces/blades/demon';
import { CityEvent } from '../../interfaces/blades/city-event';
import { BladesCityEventTableComponent } from './city-event-table/city-event-table.component';
import { BladesFactionTableComponent } from './faction-table/faction-table.component';
import { Street } from '../../interfaces/blades/street';
import { BladesStreetsTableComponent } from './streets-table/streets-table.component';
import { BladesCultsTableComponent } from './cults-table/cults-table.component';
import { Cult } from '../../interfaces/blades/cult';
import { BladesCityOccurrencesTableComponent } from './city-occurrences-table/city-occurrences-table.component';
import { CityOccurrence } from '../../interfaces/blades/city-occurrence';
import { BladesForgottenGodsTableComponent } from './forgotten-gods-table/forgotten-gods-table.component';
import { ForgottenGod } from '../../interfaces/blades/forgotten-god';
import { BladesGhostsTableComponent } from './ghosts-table/ghosts-table.component';
import { Ghost } from '../../interfaces/blades/ghost';
import { BladesRumorsTableComponent } from './rumors-table/rumors-table.component';
import { Rumor } from '../../interfaces/blades/rumor';
import { BladesCharactersTableComponent } from './characters-table/characters-table.component';
import { BladesCharacterService } from '../../services/blades/blades-character.service';
import { BladesCharacter } from '../../interfaces/blades/blades-character';

@Component({
  selector: 'app-blades',
  templateUrl: './blades.component.html',
  styleUrls: ['./blades.component.scss'],
  providers: [
    DiceService,
    BladesJsonService
  ]
})
export class BladesComponent implements OnInit {
  @ViewChild(BladesPersonTableComponent) PersonTable;
  @ViewChild(BladesBuildingTableComponent) BuildingTable;
  @ViewChild(BladesDemonTableComponent) DemonsTable;
  @ViewChild(BladesCityEventTableComponent) CityEventTable;
  @ViewChild(BladesFactionTableComponent) FactionTable;
  @ViewChild(BladesStreetsTableComponent) StreetsTable;
  @ViewChild(BladesCultsTableComponent) CultTable;
  @ViewChild(BladesCityOccurrencesTableComponent) CityOccurrenceTable;
  @ViewChild(BladesForgottenGodsTableComponent) ForgottenGodsTable;
  @ViewChild(BladesGhostsTableComponent) GhostsTable;
  @ViewChild(BladesRumorsTableComponent) RumorsTable;
  @ViewChild(BladesCharactersTableComponent) CharactersTable;

  public BladesHeader: string;
  public UseStarter: boolean;

  constructor() {
    this.BladesHeader = 'assets/blades_header.jpg';
  }

  ngOnInit() {
    
  }

  // Public Methods
  public ClearAll(): void {
    this.ClearPerson();
    this.ClearBuilding();
    this.ClearDemon();
    this.ClearCityEvents();
    this.ClearCityOccurrence();
    this.ClearForgottenGods();
    this.ClearCult();
    this.ClearGhosts();
    this.ClearStreet();
    this.ClearRumors();
    this.ClearCharacters();
  }

  public RandomizePerson(): void {
    console.clear();    
    const person: Person = BladesJsonService.RandomizePerson();
    this.PersonTable.Add(person);
  }

  public ClearPerson(): void {
    this.PersonTable.Clear();
  }

  public RandomizeBuilding(): void {
    console.clear();    
    const building: Building = BladesJsonService.RandomizeBuilding();
    this.BuildingTable.Add(building);
  }

  public ClearBuilding(): void {
    this.BuildingTable.Clear();
  }

  public RandomizeStreet(): void {
    console.clear();    
    const street: Street = BladesJsonService.RandomizeStreet();
    this.StreetsTable.Add(street);
  }

  public ClearStreet(): void {
    this.StreetsTable.Clear();
  }

  public RandomizeDemon(): void {
    console.clear();    
    const demon: Demon = BladesJsonService.RandomizeDemon();
    this.DemonsTable.Add(demon);
  }

  public ClearDemon(): void {
    this.DemonsTable.Clear();
  }

  public RandomizeCityEvent(): void {
    console.clear();    
    const cityEvent: CityEvent = BladesJsonService.RandomizeCityEvent();
    this.CityEventTable.Add(cityEvent);
  }

  public ClearCityEvents(): void {
    this.CityEventTable.Clear();
  }

  public RandomizeCityOccurrence(): void {
    console.clear();    
    const cityOccurrence: CityOccurrence = BladesJsonService.RandomizeCityOccurrence();
    this.CityOccurrenceTable.Add(cityOccurrence);
  }

  public ClearCityOccurrence(): void {
    this.CityOccurrenceTable.Clear();
  }

  public RandomizeCult(): void {
    console.clear();    
    const cult: Cult = BladesJsonService.RandomizeCult();
    this.CultTable.Add(cult);
  }

  public ClearCult(): void {
    this.CultTable.Clear();
  }

  public RandomizeForgottenGod(): void {
    console.clear();    
    const forgottenGod: ForgottenGod = BladesJsonService.RandomizeForgottenGod();
    this.ForgottenGodsTable.Add(forgottenGod);
  }

  public ClearForgottenGods(): void {
    this.ForgottenGodsTable.Clear();
  }

  public RandomizeGhost(): void {
    console.clear();    
    const ghost: Ghost = BladesJsonService.RandomizeGhost();
    this.GhostsTable.Add(ghost);
  }

  public ClearGhosts(): void {
    this.GhostsTable.Clear();
  }

  public RandomizeRumor(): void {
    console.clear();    
    const rumor: Rumor = BladesJsonService.RandomizeRumor();
    this.RumorsTable.Add(rumor);
  }

  public ClearRumors(): void {
    this.RumorsTable.Clear();
  }

  public RandomizeCharacter(): void {
    console.clear();
    const character: BladesCharacter = BladesCharacterService.RandomizePlaybook(this.UseStarter);
    this.CharactersTable.Add(character);
  }

  public ClearCharacters(): void {
    this.CharactersTable.Clear();
  }
}