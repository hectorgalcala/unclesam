import { Injectable } from '@angular/core';
import {SingleAnnualRateService} from './single-annual-rate.service';
import {MarriedAnnualRateService} from './married-annual-rate.service'

@Injectable()
export class FederalWithholdingService {

public fed_with: number;
public gross: any;

  constructor(private single_annual_rate_service: SingleAnnualRateService, private married_annual_rate_service: MarriedAnnualRateService) {
    this.fed_with = null;
    console.log("this.annual_rate_service");
  }

  fed_tax(gross, status){
    if(status === "single") {
      return this.single_rate(gross);
    }
    if(status === "married"){
      return this.married_rate(gross);
      }
    }

    single_rate(gross){
      this.gross = gross;
      var gross = this.gross;

      if(this.single_annual_rate_service.poverty(gross)) {
        this.fed_with = 0;
      }
      else if(this.single_annual_rate_service.low_class(gross)) {
        this.fed_with = gross*(10/100);
      }
      else if (this.single_annual_rate_service.low_middle_class(gross)){
        this.fed_with = 922.5 + ((gross-11525)*(15/100));
      }
      else if (this.single_annual_rate_service.middle_class(gross)){
        this.fed_with =  5156 + ((gross-39750)*(25/100));
      }
      else if(this.single_annual_rate_service.upper_middle_class(gross)){
        this.fed_with = Math.round(18558.75 + ((gross-93400)*(28/100)));
      }
      else if(this.single_annual_rate_service.upper_class(gross)){
        this.fed_with = 46278.75 + ((gross-192400)*(33/100));
      }
      else if(this.single_annual_rate_service.high_upper_class(gross)){
        this.fed_with = 119934.75 + ((gross-415600)*(35/100));
      }
      else if (this.single_annual_rate_service.new_money(gross)){
        this.fed_with = gross*(39.6/100);
        }
      else {
        console.log("Else happen in single rate()");
      }

      return this.fed_with;
    }

    married_rate(gross){
      this.gross = parseInt(gross);
      var gross = this.gross;

      if(this.married_annual_rate_service.poverty(gross)){
        this.fed_with = 0;
      }
      else if(this.married_annual_rate_service.low_class(gross)) {
        this.fed_with = gross*(10/100);
      }
      else if (this.married_annual_rate_service.low_middle_class(gross)){
        this.fed_with = 922.5 + ((gross-11525)*(15/100));
      }
      else if (this.married_annual_rate_service.middle_class(gross)){
        this.fed_with =  5156 + ((gross-39750)*(25/100));
      }
      else if(this.married_annual_rate_service.upper_middle_class(gross)){
        // $18,558.75 plus 28% —$93,400
        this.fed_with = 18558.75 + ((gross-93400)*(28/100));
      }
      else if(this.married_annual_rate_service.upper_class(gross)){
        // $46,278.75 plus 33% —$192,400
        this.fed_with = 46278.75 + ((gross-192400)*(33/100));
      }
      else if(this.married_annual_rate_service.high_upper_class(gross)){
      // $415,600 —$417,300 . . $119,934.75 plus 35% —$415,600
        this.fed_with = 119934.75 + ((gross-415600)*(35/100));
      }
      else if(this.married_annual_rate_service.new_money(gross)) {
        this.fed_with = gross*(39.6/100);
        }
      return this.fed_with;
    }

}
