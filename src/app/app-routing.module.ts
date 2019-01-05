import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BladesComponent } from './components/blades/blades.component';
import { Paths } from './enums/shared/paths.enum';

const routes: Routes = [
    { path: '', component: HomeComponent, data: { pathEnum: Paths.Home } },
    { path: 'blades', component: BladesComponent, data: { pathEnum: Paths.BladesHome, title: 'Blades in the Dark' } }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
