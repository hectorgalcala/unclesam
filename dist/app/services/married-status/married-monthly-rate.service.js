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
var MarriedMonthlyRateService = (function () {
    // Service that is gonna compute Federal Taxes depending of your tax bracket;
    function MarriedMonthlyRateService() {
    }
    MarriedMonthlyRateService.prototype.poverty = function (gross) {
        return gross < 713;
    };
    MarriedMonthlyRateService.prototype.low_class = function (gross) {
        return gross > 713 && gross <= 2258;
    };
    MarriedMonthlyRateService.prototype.low_middle_class = function (gross) {
        return gross > 2258 && gross <= 6988;
    };
    MarriedMonthlyRateService.prototype.middle_class = function (gross) {
        return gross >= 6989 && gross <= 13371;
    };
    MarriedMonthlyRateService.prototype.upper_middle_class = function (gross) {
        return gross >= 13371 && gross <= 20000;
    };
    MarriedMonthlyRateService.prototype.upper_class = function (gross) {
        return gross >= 20001 && gross <= 35158;
    };
    MarriedMonthlyRateService.prototype.high_upper_class = function (gross) {
        return gross >= 35159 && gross <= 39625;
    };
    MarriedMonthlyRateService.prototype.new_money = function (gross) {
        return gross > 39625;
    };
    MarriedMonthlyRateService.prototype.computeFed = function (gross) {
        if (this.poverty(gross)) {
            this.fed_with = 0;
        }
        else if (this.low_class(gross)) {
            this.fed_with = gross * (10 / 100);
        }
        else if (this.low_middle_class(gross)) {
            this.fed_with = 154.5 + ((gross - 2258) * (15 / 100));
        }
        else if (this.middle_class(gross)) {
            this.fed_with = 864 + ((gross - 6988) * (25 / 100));
        }
        else if (this.upper_middle_class(gross)) {
            this.fed_with = 2459.75 + ((gross - 13371) * (28 / 100));
        }
        else if (this.upper_class(gross)) {
            this.fed_with = 4315.87 + ((gross - 20000) * (33 / 100));
        }
        else if (this.high_upper_class(gross)) {
            this.fed_with = 9318.01 + ((gross - 35158) * (35 / 100));
        }
        else if (this.new_money(gross)) {
            this.fed_with = 10881.46 + gross * (39.6 / 100);
        }
        else {
            console.log("Else happen in single rate()");
        }
        return this.fed_with;
    };
    MarriedMonthlyRateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MarriedMonthlyRateService);
    return MarriedMonthlyRateService;
}());
exports.MarriedMonthlyRateService = MarriedMonthlyRateService;
//# sourceMappingURL=married-monthly-rate.service.js.map