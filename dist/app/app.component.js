"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular 2 objects
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// components
var federal_screen_component_1 = require('./components/federal-screen.component');
var yourrate_component_1 = require('./components/yourrate/yourrate.component');
// Services
var federal_withholding_service_1 = require('./service/federal-withholding.service');
// Annual Rate Federal Withholding
var single_annual_rate_service_1 = require('./service/single-status/single-annual-rate.service');
var married_annual_rate_service_1 = require('./service/married-status/married-annual-rate.service');
// Monthly Rate Federal Withholding
var single_monthly_rate_service_1 = require('./service/single-status/single-monthly-rate.service');
var married_monthly_rate_service_1 = require('./service/married-status/married-monthly-rate.service');
// Income Statement data such as Salary After Taxes
var income_statement_service_1 = require('./service/income-statement/income-statement.service');
var AppComponent = (function () {
    function AppComponent() {
        console.log("From app component");
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-component',
            template: "\n   <ul>\n    <li><a [routerLink]=\"['/yourrate']\">your rate</a></li>\n    <li><a [routerLink]=\"['/federal-screen']\"></a>Annual Salary Federal Tax Calculator</li>\n  </ul>\n  <router-outlet></router-outlet>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES, federal_screen_component_1.FederalScreenComponent],
            providers: [router_1.Router, router_1.ROUTER_PROVIDERS, federal_withholding_service_1.FederalWithholdingService, income_statement_service_1.IncomeStatementService, single_annual_rate_service_1.SingleAnnualRateService, married_annual_rate_service_1.MarriedAnnualRateService, single_monthly_rate_service_1.SingleMonthlyRateService, married_monthly_rate_service_1.MarriedMonthlyRateService]
        }),
        router_1.Routes([
            { path: '/yourrate', component: yourrate_component_1.YourRateComponent },
            { path: '/federal-screen', component: federal_screen_component_1.FederalScreenComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map