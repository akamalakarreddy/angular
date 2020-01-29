import {Routes,RouterModule} from "@angular/router";

import {CountriesModule} from "./countries.module";

import {ModuleWithProviders } from "@angular/core" ;
import { PageOneComponent } from './pageone.component';

export const appRoutes:Routes = [
    {path:'page_one',component:PageOneComponent},
    {path:'lazy',loadChildren:"./countries.module#CountriesModule"}
]

export const lazyRoutes:ModuleWithProviders =RouterModule.forRoot(appRoutes);