import { Injectable } from '@angular/core';
import {SingleAnnualRateService} from './single-status/single-annual-rate.service';
import {MarriedAnnualRateService} from './married-status/married-annual-rate.service'
import {SingleMonthlyRateService} from './single-status/single-monthly-rate.service';
@Injectable()
export class FederalWithholdingService {

public fed_with: number;
public gross: any;

  constructor(private single_annual_rate_service: SingleAnnualRateService,private married_annual_rate_service: MarriedAnnualRateService, private single_monthly_rate_service: SingleMonthlyRateService) {
    this.fed_with = null;
  }

  fed_tax(gross, status, pay_freq) {

    if(status === "single") {
      if(pay_frew == "annual") {
        return this.single_annual_rate(gross);
      }
    }

    if(status === "married") {
      if(pay_freq == "annual")  {
          return this.married_annual_rate(gross);
      }
    }
    
   }

    single_annual_rate(gross) {
      this.gross = gross;
      this.fed_with = this.single_annual_rate_service.computeFed(this.gross);
      return this.fed_with;
    }

    married_annual_rate(gross){
      this.gross = parseInt(gross);
      this.fed_with = this.married_annual_rate_service.computeFed(this.gross);
      return this.fed_with;
    }

    single_monthly_rate(gross){
      this.gross = gross;
    }



}
