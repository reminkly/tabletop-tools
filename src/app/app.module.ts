import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BladesComponent } from './components/blades/blades.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatExpansionModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatToolbarModule
} from '@angular/material';

import {
  MatSidenavModule
} from '@angular/material/sidenav';

import { DiceService } from './services/dice.service';
import { BladesJsonService } from './services/blades/blades-json.service';
import { BladesCharacterService } from './services/blades/blades-character.service';
import { BladesPersonTableComponent } from './components/blades/person-table/person-table.component';
import { BladesBuildingTableComponent } from './components/blades/building-table/building-table.component';
import { BladesDemonTableComponent } from './components/blades/demon-table/demon-table.component';
import { BladesCityEventTableComponent } from './components/blades/city-event-table/city-event-table.component';
import { BladesFactionTableComponent } from './components/blades/faction-table/faction-table.component';
import { BladesWorldLocationsTableComponent } from './components/blades/world-locations-table/world-locations-table.component';
import { BladesStreetsTableComponent } from './components/blades/streets-table/streets-table.component';
import { BladesCultsTableComponent } from './components/blades/cults-table/cults-table.component';
import { BladesCityOccurrencesTableComponent } from './components/blades/city-occurrences-table/city-occurrences-table.component';
import { BladesForgottenGodsTableComponent } from './components/blades/forgotten-gods-table/forgotten-gods-table.component';
import { BladesGhostsTableComponent } from './components/blades/ghosts-table/ghosts-table.component';
import { BladesRumorsTableComponent } from './components/blades/rumors-table/rumors-table.component';
import { BladesCharactersTableComponent } from './components/blades/characters-table/characters-table.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    BladesComponent,
    BladesPersonTableComponent,
    BladesBuildingTableComponent,
    BladesDemonTableComponent,
    BladesCityEventTableComponent,
    BladesFactionTableComponent,
    BladesWorldLocationsTableComponent,
    BladesStreetsTableComponent,
    BladesCultsTableComponent,
    BladesCityOccurrencesTableComponent,
    BladesForgottenGodsTableComponent,
    BladesGhostsTableComponent,
    BladesRumorsTableComponent,
    BladesCharactersTableComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [
          HttpClient
        ]
      }
    })
  ],
  providers: [
    ElectronService,
    DiceService,
    BladesJsonService,
    BladesCharacterService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor() {

  }
}