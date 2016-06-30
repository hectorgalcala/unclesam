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
// Models
var paycheck_model_1 = require('../models/paycheck.model');
var income_statement_model_1 = require('../models/income-statement.model');
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
    function FederalScreenComponent(fed_service) {
        this.fed_service = fed_service;
    }
    FederalScreenComponent.prototype.ngOnInit = function () {
        this.paycheck = new paycheck_model_1.Paycheck();
        this.income_statement = new income_statement_model_1.IncomeStatement();
        this.setAllnull();
        this.paycheck.gross_pay = 50000;
        this.fed_tax(this.paycheck.gross_pay, "single", "annually");
    };
    FederalScreenComponent.prototype.setAllnull = function () {
        this.paycheck.fed_with = null;
        this.paycheck.social_security = null;
        this.paycheck.medicare = null;
        this.paycheck.gross_pay = null;
    };
    FederalScreenComponent.prototype.yearly_net_income = function (gross_pay, taxes) {
        this.income_statement.annual_pay = (gross_pay - taxes);
        this.income_statement.monthly_pay = this.income_statement.annual_pay / 12;
        this.income_statement.semi_monthly_pay = this.income_statement.annual_pay / 24;
        this.income_statement.biweekly_pay = this.income_statement.annual_pay / 26;
        this.income_statement.weekly_pay = this.income_statement.annual_pay / 52;
    };
    FederalScreenComponent.prototype.monthly_net_income = function (gross_pay, taxes) {
        this.income_statement.annual_pay = (gross_pay - taxes) * 12;
        this.income_statement.monthly_pay = this.income_statement.annual_pay / 12;
        this.income_statement.semi_monthly_pay = this.income_statement.annual_pay / 24;
        this.income_statement.biweekly_pay = this.income_statement.annual_pay / 26;
        this.income_statement.weekly_pay = this.income_statement.annual_pay / 52;
    };
    FederalScreenComponent.prototype.compute_taxes = function () {
        this.paycheck.social_security = this.social_security_tax(this.paycheck.gross_pay);
        this.paycheck.medicare = this.medicare_tax(this.paycheck.gross_pay);
        this.income_statement.taxes = this.paycheck.fed_with + this.paycheck.social_security + this.paycheck.medicare;
        if (this.paycheck.pay_freq == "monthly") {
            this.monthly_net_income(this.paycheck.gross_pay, this.income_statement.taxes);
        }
        if (this.paycheck.pay_freq == "annually") {
            this.yearly_net_income(this.paycheck.gross_pay, this.income_statement.taxes);
        }
    };
    FederalScreenComponent.prototype.social_security_tax = function (gross) {
        if (gross >= 118500) {
            this.paycheck.social_security = 118500 * 0.062;
        }
        else {
            this.paycheck.social_security = gross * 0.062;
        }
        return this.paycheck.social_security;
    };
    FederalScreenComponent.prototype.medicare_tax = function (gross) {
        if (gross >= 200000) {
            this.paycheck.medicare = 200000 * 0.0145 + ((gross - 200000) * 0.0235);
        }
        else {
            this.paycheck.medicare = gross * 0.0145;
        }
        return this.paycheck.medicare;
    };
    // NOTE Blank HTML input elements === "" so when input is blank,  gross will be equal to zero. This way we wont a get a NaN issue.
    FederalScreenComponent.prototype.fed_tax = function (gross, status, pay_freq) {
        if (gross == "") {
            gross = 0;
        }
        this.paycheck.gross_pay = parseInt(gross);
        this.paycheck.fed_status = status;
        this.paycheck.pay_freq = pay_freq;
        this.paycheck.fed_with = this.fed_service.fed_tax(this.paycheck.gross_pay, this.paycheck.fed_status, this.paycheck.pay_freq);
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
        __metadata('design:paramtypes', [federal_withholding_service_1.FederalWithholdingService])
    ], FederalScreenComponent);
    return FederalScreenComponent;
}());
exports.FederalScreenComponent = FederalScreenComponent;
//# sourceMappingURL=federal-screen.component.js.map