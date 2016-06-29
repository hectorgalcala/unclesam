// Angular 2 objects
import {Component} from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, Router, ROUTER_PROVIDERS } from '@angular/router';

// Components
import {FederalScreenComponent} from './components/federal-screen.component';


// Interface/Models


// Services
import {FederalWithholdingService} from './services/federal-withholding.service';

// Annual Rate Federal Withholding
import {SingleAnnualRateService} from './services/single-status/single-annual-rate.service';
import {MarriedAnnualRateService} from './services/married-status/married-annual-rate.service';

// Monthly Rate Federal Withholding
import {SingleMonthlyRateService} from './services/single-status/single-monthly-rate.service';
import {MarriedMonthlyRateService} from './services/married-status/married-monthly-rate.service';

// Income Statement data such as Salary After Taxes
import {IncomeStatementService} from './services/income-statement/income-statement.service';

@Component({
  moduleId: module.id,
  selector: 'app-component',
  template: `
<federal-screen></federal-screen>
  `,
  directives:[ROUTER_DIRECTIVES, FederalScreenComponent],
  providers:[Router, ROUTER_PROVIDERS,FederalWithholdingService, IncomeStatementService, SingleAnnualRateService, MarriedAnnualRateService, SingleMonthlyRateService, MarriedMonthlyRateService]
})

@Routes([
  {path:'/federal-screen', component: FederalScreenComponent}
])
export class AppComponent {
  constructor() {
  }


}
