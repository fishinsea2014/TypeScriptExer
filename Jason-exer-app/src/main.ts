import { enableProdMode } from '@angular/core'; // Angular dependicies
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';  //Dynamic guiding

import { AppModule } from './app/app.module'; //Introduce modules
import { environment } from './environments/environment';

//Decide the development mode or not.
if (environment.production) {
  enableProdMode();
}

//Start the angular modules.
platformBrowserDynamic().bootstrapModule(AppModule)  //Jump to start module.
  .catch(err => console.error(err));

