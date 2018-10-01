import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component'; // User defined components
import { DetailComponent} from './detail.component'; //All the components have to be referenced in the module
import { SliderComponent} from './slider.component';
import { PurchaseComponent} from './purchase.component';
import { PurchaseStatePipe} from './app.purchaseStatePipe';
import { RouterComponent } from './app.component.router';

import { AppRouterModule } from './router/router.module';
import { HomeComponent } from './router/home';
import { AboutComponent } from './router/about';
import { ContactComponent } from './router/contact';
 
@NgModule({
  declarations: [  //Declare user components
    AppComponent,
    DetailComponent,
    SliderComponent,
    PurchaseComponent,
    PurchaseStatePipe,
    RouterComponent,

    //For router
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],

  imports: [ //Declare dependencies
    BrowserModule,
    FormsModule,

    //For router
    AppRouterModule
  ],
  providers: [], //The creater of the servicies
  bootstrap: [AppComponent] // Start components
})
export class AppModule { }
