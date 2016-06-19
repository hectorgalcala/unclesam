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
var MarriedAnnualRateService = (function () {
    // NOTE Service that is gonna compute Federal Taxes depending of your tax bracket;
    function MarriedAnnualRateService() {
    }
    MarriedAnnualRateService.prototype.poverty = function (gross) {
        return gross < 8550;
    };
    MarriedAnnualRateService.prototype.low_class = function (gross) {
        return gross < 27100 && gross >= 8550;
    };
    MarriedAnnualRateService.prototype.low_middle_class = function (gross) {
        return gross >= 27100 && gross <= 83850;
    };
    MarriedAnnualRateService.prototype.middle_class = function (gross) {
        return gross >= 83851 && gross <= 160450;
    };
    MarriedAnnualRateService.prototype.upper_middle_class = function (gross) {
        return gross >= 160451 && gross <= 240000;
    };
    MarriedAnnualRateService.prototype.upper_class = function (gross) {
        return gross >= 240001 && gross <= 421900;
    };
    MarriedAnnualRateService.prototype.high_upper_class = function (gross) {
        return gross >= 421901 && gross <= 475500;
    };
    MarriedAnnualRateService.prototype.new_money = function (gross) {
        return gross >= 475501;
    };
    MarriedAnnualRateService.prototype.computeFed = function (gross) {
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
            // $18,558.75 plus 28% —$93,400
            this.fed_with = 18558.75 + ((gross - 93400) * (28 / 100));
        }
        else if (this.upper_class(gross)) {
            // $46,278.75 plus 33% —$192,400
            this.fed_with = 46278.75 + ((gross - 192400) * (33 / 100));
        }
        else if (this.high_upper_class(gross)) {
            // $415,600 —$417,300 . . $119,934.75 plus 35% —$415,600
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
    MarriedAnnualRateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MarriedAnnualRateService);
    return MarriedAnnualRateService;
}());
exports.MarriedAnnualRateService = MarriedAnnualRateService;
//# sourceMappingURL=married-annual-rate.service.js.map