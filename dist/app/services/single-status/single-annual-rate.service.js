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
var SingleAnnualRateService = (function () {
    // NOTE Service that is gonna compute Federal Taxes depending of your tax bracket;
    function SingleAnnualRateService() {
    }
    SingleAnnualRateService.prototype.poverty = function (gross) {
        return gross < 2249;
    };
    SingleAnnualRateService.prototype.low_class = function (gross) {
        return gross < 11524 && gross >= 2250;
    };
    SingleAnnualRateService.prototype.low_middle_class = function (gross) {
        return gross >= 11525 && gross <= 39900;
    };
    SingleAnnualRateService.prototype.middle_class = function (gross) {
        return gross >= 39991 && gross <= 93400;
    };
    SingleAnnualRateService.prototype.upper_middle_class = function (gross) {
        return gross >= 93401 && gross <= 192400;
    };
    SingleAnnualRateService.prototype.upper_class = function (gross) {
        return gross >= 192401 && gross <= 415600;
    };
    SingleAnnualRateService.prototype.high_upper_class = function (gross) {
        return gross >= 415601 && gross <= 417300;
    };
    SingleAnnualRateService.prototype.new_money = function (gross) {
        return gross >= 417301;
    };
    SingleAnnualRateService.prototype.computeFed = function (gross) {
        if (this.poverty(gross)) {
            this.fed_with = 0;
        }
        else if (this.low_class(gross)) {
            this.fed_with = gross * (10 / 100);
        }
        else if (this.low_middle_class(gross)) {
            this.fed_with = 922.5 + ((gross - 11525) * (15 / 100));
        }
        else if (this.middle_class(gross)) {
            this.fed_with = 5156 + ((gross - 39750) * (25 / 100));
        }
        else if (this.upper_middle_class(gross)) {
            this.fed_with = 18558.75 + ((gross - 93400) * (28 / 100));
        }
        else if (this.upper_class(gross)) {
            this.fed_with = 46278.75 + ((gross - 192400) * (33 / 100));
        }
        else if (this.high_upper_class(gross)) {
            this.fed_with = 119934.75 + ((gross - 415600) * (35 / 100));
        }
        else if (this.new_money(gross)) {
            this.fed_with = gross * (39.6 / 100);
        }
        else {
            console.log("Else happen in single rate()");
        }
        return this.fed_with;
    };
    SingleAnnualRateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SingleAnnualRateService);
    return SingleAnnualRateService;
}());
exports.SingleAnnualRateService = SingleAnnualRateService;
//# sourceMappingURL=single-annual-rate.service.js.map