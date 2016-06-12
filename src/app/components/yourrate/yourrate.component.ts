// Angular 2 objects
import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'your-rate',
  templateUrl: 'yourrate.component.html',
  styleUrls: ['yourrate.component.css']
})
export class YourRateComponent {
  constructor() {
    console.log("your rate component");
  }


}
