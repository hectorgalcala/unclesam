import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { FederalScreenComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}
console.log("HELLO SAM");
bootstrap(FederalScreenComponent);
