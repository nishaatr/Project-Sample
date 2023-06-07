import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// NISHAAT COMMENT
if (environment.production) {
  enableProdMode();
}
// NISHAAT COMMENT
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
