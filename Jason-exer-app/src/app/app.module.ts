import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component'; // User defined components

@NgModule({
  declarations: [  //Declare user components
    AppComponent
  ],
  imports: [ //Declare dependencies
    BrowserModule,
    FormsModule
  ],
  providers: [], //The creater of the servicies
  bootstrap: [AppComponent] // Start components
})
export class AppModule { }
