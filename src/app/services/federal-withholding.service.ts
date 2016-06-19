import { Injectable } from '@angular/core';
import {SingleAnnualRateService} from './single-status/single-annual-rate.service';
import {MarriedAnnualRateService} from './married-status/married-annual-rate.service'
import {SingleMonthlyRateService} from './single-status/single-monthly-rate.service';
import {MarriedMonthlyRateService} from './married-status/married-monthly-rate.service';
@Injectable()
export class FederalWithholdingService {
  constructor(private single_annual_rate_service: SingleAnnualRateService,private married_annual_rate_service: MarriedAnnualRateService, private single_monthly_rate_service: SingleMonthlyRateService, private married_monthly_rate_service: MarriedMonthlyRateService) {
  }

  fed_tax(gross, status, pay_freq) {
    if(status === "single") {
      if (pay_freq == "annually") {
        return this.single_annual_rate_service.computeFed(gross);
      }

    if (pay_freq == "monthly") {
        return this.single_monthly_rate_service.computeFed(gross)
      }
    }

    if(status === "married") {
      if(pay_freq == "annually")  {
          return this.married_annual_rate_service.computeFed(gross);
      }
      if(pay_freq == "monthly"){
          return this.married_monthly_rate_service.computeFed(gross);
      }
    }
  }




}
