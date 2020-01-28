import { Routes } from  "@angular/router";
import { PageoneComponent } from '../components/pageone.component';
import { PagetwoComponent } from '../components/pagetwo.component';
import { FirstChildComponent } from '../components/firstchild.component';
import { SecondChildComponent } from '../components/secondchild.component';
import { AuthGuards } from '../authentications/auth.guards';


export const appRoute:Routes = [
    { path:"page_one" , component:PageoneComponent, 
            children:[{
                path:'child_one', component:FirstChildComponent
            }],canActivate:[AuthGuards]},
    { path:"page_two" , component:PagetwoComponent,
            children:[{
                path:'child_two', component:SecondChildComponent
            }],canActivateChild:[AuthGuards]}
];