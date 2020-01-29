import {NgModule} from "@angular/core";

import { Routes,RouterModule} from "@angular/router";

import { CommonModule} from "@angular/common";

import { CountriesService } from "./countries.service";

import { CountriesComponent } from "./countries.component";

import {HttpClientModule} from "@angular/common/http";

export const appRoutes:Routes = [
    {path:"",component:CountriesComponent}
];

@NgModule({
    declarations:[CountriesComponent],
    imports:[HttpClientModule,CommonModule,RouterModule.forChild(appRoutes)],
    providers:[CountriesService],
    exports:[CountriesComponent]
})

export class CountriesModule {}