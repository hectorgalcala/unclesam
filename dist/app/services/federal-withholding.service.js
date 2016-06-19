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
var core_1 = require('@angular/core');
var single_annual_rate_service_1 = require('./single-status/single-annual-rate.service');
var married_annual_rate_service_1 = require('./married-status/married-annual-rate.service');
var single_monthly_rate_service_1 = require('./single-status/single-monthly-rate.service');
var married_monthly_rate_service_1 = require('./married-status/married-monthly-rate.service');
var FederalWithholdingService = (function () {
    function FederalWithholdingService(single_annual_rate_service, married_annual_rate_service, single_monthly_rate_service, married_monthly_rate_service) {
        this.single_annual_rate_service = single_annual_rate_service;
        this.married_annual_rate_service = married_annual_rate_service;
        this.single_monthly_rate_service = single_monthly_rate_service;
        this.married_monthly_rate_service = married_monthly_rate_service;
    }
    FederalWithholdingService.prototype.fed_tax = function (gross, status, pay_freq) {
        if (status === "single") {
            if (pay_freq == "annually") {
                return this.single_annual_rate_service.computeFed(gross);
            }
            if (pay_freq == "monthly") {
                return this.single_monthly_rate_service.computeFed(gross);
            }
        }
        if (status === "married") {
            if (pay_freq == "annually") {
                return this.married_annual_rate_service.computeFed(gross);
            }
            if (pay_freq == "monthly") {
                return this.married_monthly_rate_service.computeFed(gross);
            }
        }
    };
    FederalWithholdingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [single_annual_rate_service_1.SingleAnnualRateService, married_annual_rate_service_1.MarriedAnnualRateService, single_monthly_rate_service_1.SingleMonthlyRateService, married_monthly_rate_service_1.MarriedMonthlyRateService])
    ], FederalWithholdingService);
    return FederalWithholdingService;
}());
exports.FederalWithholdingService = FederalWithholdingService;
//# sourceMappingURL=federal-withholding.service.js.map