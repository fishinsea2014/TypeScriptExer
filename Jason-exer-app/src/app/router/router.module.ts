import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import {HomeComponent} from './home';
import {AboutComponent} from './about';
import {ContactComponent} from './contact';

//Config router
const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent}    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRouterModule{}