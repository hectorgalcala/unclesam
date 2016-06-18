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
var SingleMonthlyRateService = (function () {
    // NOTE Service that is gonna compute Federal Taxes depending of your tax bracket;
    function SingleMonthlyRateService() {
    }
    SingleMonthlyRateService.prototype.poverty = function (gross) {
        return gross < 188;
    };
    SingleMonthlyRateService.prototype.low_class = function (gross) {
        return gross > 188 && gross <= 960;
    };
    SingleMonthlyRateService.prototype.low_middle_class = function (gross) {
        return gross >= 961 && gross <= 3325;
    };
    SingleMonthlyRateService.prototype.middle_class = function (gross) {
        return gross >= 3326 && gross <= 7783;
    };
    SingleMonthlyRateService.prototype.upper_middle_class = function (gross) {
        return gross >= 7784 && gross <= 16033;
    };
    SingleMonthlyRateService.prototype.upper_class = function (gross) {
        return gross >= 16034 && gross <= 34633;
    };
    SingleMonthlyRateService.prototype.high_upper_class = function (gross) {
        return gross >= 34634 && gross <= 34775;
    };
    SingleMonthlyRateService.prototype.new_money = function (gross) {
        return gross >= 34776;
    };
    SingleMonthlyRateService.prototype.computeFed = function (gross) {
        if (this.poverty(gross)) {
            this.fed_with = 0;
        }
        else if (this.low_class(gross)) {
            this.fed_with = gross * (10 / 100);
        }
        else if (this.low_middle_class(gross)) {
            this.fed_with = 77.20 + ((gross - 960) * (15 / 100));
        }
        else if (this.middle_class(gross)) {
            this.fed_with = 431.95 + ((gross - 3325) * (25 / 100));
        }
        else if (this.upper_middle_class(gross)) {
            this.fed_with = 1546.45 + ((gross - 7783) * (28 / 100));
        }
        else if (this.upper_class(gross)) {
            this.fed_with = 3856.45 + ((gross - 16033) * (33 / 100));
        }
        else if (this.high_upper_class(gross)) {
            this.fed_with = 9994.45 + ((gross - 34633) * (35 / 100));
        }
        else if (this.new_money(gross)) {
            this.fed_with = 10044 + gross * (39.6 / 100);
        }
        else {
            console.log("Else happen in single rate()");
        }
        return this.fed_with;
    };
    SingleMonthlyRateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SingleMonthlyRateService);
    return SingleMonthlyRateService;
}());
exports.SingleMonthlyRateService = SingleMonthlyRateService;
//# sourceMappingURL=single-monthly-rate.service.js.map