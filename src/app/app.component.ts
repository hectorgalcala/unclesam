
// Angular 2 objects
import {Component} from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, Router, ROUTER_PROVIDERS } from '@angular/router';
// components
import {FederalScreenComponent} from './components/federal-screen.component';
import {YourRateComponent} from './components/yourrate/yourrate.component';
// Interface
import {FederalTax} from './models/federal-tax.interface';

// Services
import {FederalWithholdingService} from './service/federal-withholding.service';

// Annual Rate Federal Withholding
import {SingleAnnualRateService} from './service/single-status/single-annual-rate.service';
import {MarriedAnnualRateService} from './service/married-status/married-annual-rate.service';

// Monthly Rate Federal Withholding
import {SingleMonthlyRateService} from './service/single-status/single-monthly-rate.service';
import {MarriedMonthlyRateService} from './service/married-status/married-monthly-rate.service';

// Income Statement data such as Salary After Taxes
import {IncomeStatementService} from './service/income-statement/income-statement.service';

@Component({
  moduleId: module.id,
  selector: 'app-component',
  template: `
   <ul>
    <li><a [routerLink]="['/yourrate']">your rate</a></li>
    <li><a [routerLink]="['/federal-screen']"></a>Annual Salary Federal Tax Calculator</li>
  </ul>
  <router-outlet></router-outlet>
  `,
  directives:[ROUTER_DIRECTIVES, FederalScreenComponent],
  providers:[Router, ROUTER_PROVIDERS,FederalWithholdingService, IncomeStatementService, SingleAnnualRateService, MarriedAnnualRateService, SingleMonthlyRateService, MarriedMonthlyRateService]
})

@Routes([
  {path: '/yourrate', component: YourRateComponent},
  {path:'/federal-screen', component: FederalScreenComponent}
])
export class AppComponent {
  constructor() {
    console.log("From app component");
  }


}
