import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BladesComponent } from './components/blades/blades.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blades', component: BladesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
