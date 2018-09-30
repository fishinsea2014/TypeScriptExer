import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component'; // User defined components
import { DetailComponent} from './detail.component'; //All the components have to be referenced in the module
import { SliderComponent} from './slider.component';
import { PurchaseComponent} from './purchase.component';
import { PurchaseStatePipe} from './app.purchaseStatePipe';

@NgModule({
  declarations: [  //Declare user components
    AppComponent,
    DetailComponent,
    SliderComponent,
    PurchaseComponent,
    PurchaseStatePipe
  ],
  imports: [ //Declare dependencies
    BrowserModule,
    FormsModule
  ],
  providers: [], //The creater of the servicies
  bootstrap: [AppComponent] // Start components
})
export class AppModule { }
