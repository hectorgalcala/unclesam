import { Injectable } from '@angular/core';
import {SingleAnnualRateService} from './single-annual-rate.service';
import {MarriedAnnualRateService} from './married-annual-rate.service'

@Injectable()
export class FederalWithholdingService {

public fed_with: number;
public gross: any;

  constructor(private single_annual_rate_service: SingleAnnualRateService, private married_annual_rate_service: MarriedAnnualRateService) {
    this.fed_with = null;
  }

  fed_tax(gross, status) {

    if(status === "single") {
      return this.single_rate(gross);
    }
    if(status === "married"){
      return this.married_rate(gross);
      }
    }

    single_rate(gross) {
      this.gross = gross;
      var gross = this.gross;
      this.fed_with = this.single_annual_rate_service.computeFed(this.gross);
      return this.fed_with;
    }

    married_rate(gross){
      this.gross = parseInt(gross);
      var gross = this.gross;
      this.fed_with = this.married_annual_rate_service.computeFed(gross);
      return this.fed_with;
    }



}
