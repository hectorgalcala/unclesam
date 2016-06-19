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
// Services
var federal_withholding_service_1 = require('../services/federal-withholding.service');
// Annual Rate Federal Withholding
var single_annual_rate_service_1 = require('../services/single-status/single-annual-rate.service');
var married_annual_rate_service_1 = require('../services/married-status/married-annual-rate.service');
// Monthly Rate Federal Withholding
var single_monthly_rate_service_1 = require('../services/single-status/single-monthly-rate.service');
var married_monthly_rate_service_1 = require('../services/married-status/married-monthly-rate.service');
// Income Statement data such as Salary After Taxes
var income_statement_service_1 = require('../services/income-statement/income-statement.service');
var FederalScreenComponent = (function () {
    function FederalScreenComponent(fed_service, income_statement) {
        this.fed_service = fed_service;
        this.income_statement = income_statement;
        this.setAllnull();
        this.gross_pay = 50000;
    }
    FederalScreenComponent.prototype.setAllnull = function () {
        this.fed_with = null;
        this.social_security = null;
        this.medicare = null;
        this.gross_pay = null;
    };
    FederalScreenComponent.prototype.yearly_net_income = function (gross_pay, taxes) {
        this.annual_pay = gross_pay - taxes;
        this.monthly_pay = this.annual_pay / 12;
        this.semi_monthly_pay = this.annual_pay / 24;
        this.biweekly_pay = this.annual_pay / 26;
        this.weekly_pay = this.annual_pay / 52;
    };
    FederalScreenComponent.prototype.monthly_net_income = function (gross_pay, taxes) {
        this.annual_pay = (gross_pay - taxes) * 12;
        this.monthly_pay = this.annual_pay / 12;
        this.semi_monthly_pay = this.annual_pay / 24;
        this.biweekly_pay = this.annual_pay / 26;
        this.weekly_pay = this.annual_pay / 52;
    };
    FederalScreenComponent.prototype.compute_taxes = function () {
        this.social_security = this.social_security_tax(this.gross_pay);
        this.medicare = this.medicare_tax(this.gross_pay);
        this.taxes = this.fed_with + this.social_security + this.medicare;
        if (this.pay_freq == "monthly") {
            this.monthly_net_income(this.gross_pay, this.taxes);
        }
        if (this.pay_freq == "annually") {
            this.yearly_net_income(this.gross_pay, this.taxes);
        }
    };
    FederalScreenComponent.prototype.social_security_tax = function (gross) {
        if (gross >= 118500) {
            this.social_security = 118500 * 0.062;
        }
        else {
            this.social_security = gross * 0.062;
        }
        return this.social_security;
    };
    FederalScreenComponent.prototype.medicare_tax = function (gross) {
        if (gross >= 200000) {
            console.log("if");
            var medicare = 200000 * 0.0145 + ((gross - 200000) * 0.0235);
        }
        else {
            console.log("else");
            var medicare = gross * 0.0145;
        }
        return medicare;
    };
    // NOTE Blank HTML input elements === "" so when input is blank,  gross will be equal to zero. This way we wont a get a NaN issue.
    FederalScreenComponent.prototype.fed_tax = function (gross, status, pay_freq) {
        if (gross == "") {
            gross = 0;
        }
        this.gross_pay = parseInt(gross);
        this.fed_status = status;
        this.pay_freq = pay_freq;
        this.fed_with = this.fed_service.fed_tax(this.gross_pay, this.fed_status, this.pay_freq);
        this.compute_taxes();
    };
    FederalScreenComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'federal-screen',
            templateUrl: 'federal-screen.component.html',
            styleUrls: ['federal-screen.component.css'],
            providers: [federal_withholding_service_1.FederalWithholdingService, income_statement_service_1.IncomeStatementService, single_annual_rate_service_1.SingleAnnualRateService, married_annual_rate_service_1.MarriedAnnualRateService, single_monthly_rate_service_1.SingleMonthlyRateService, married_monthly_rate_service_1.MarriedMonthlyRateService]
        }), 
        __metadata('design:paramtypes', [federal_withholding_service_1.FederalWithholdingService, income_statement_service_1.IncomeStatementService])
    ], FederalScreenComponent);
    return FederalScreenComponent;
}());
exports.FederalScreenComponent = FederalScreenComponent;
//# sourceMappingURL=federal-screen.component.js.map