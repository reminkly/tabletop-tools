import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BladesComponent } from './components/blades/blades.component';

const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Tabletop Tools' } },
    { path: 'blades', component: BladesComponent, data: { title: 'Blades in the Dark' } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
