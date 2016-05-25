import { Injectable } from '@angular/core';
import {RateService} from './rate.service';

@Injectable()
export class FederalWithholdingService {

public fed_with: number;
public gross: any;

  constructor(private rate_service: RateService) {
    this.fed_with = null;
    this.rate_service.test();
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

      if(gross < 2249) {
        this.fed_with = 0;
        return this.fed_with
      }
      else if(gross < 11524 && gross >= 2250) {
        this.fed_with = gross*(10/100);
        return this.fed_with
      }
      else if (gross >= 11525 && gross <= 39900){
        this.fed_with = 922.5 + ((gross-11525)*(15/100));
        return this.fed_with;
      }
      else if (gross >= 39991 && gross <= 93400){
        this.fed_with =  5156 + ((gross-39750)*(25/100));
        return this.fed_with;
      }
      else if(gross >= 93401 && gross <= 192400){
        // $18,558.75 plus 28% —$93,400
        this.fed_with = Math.round(18558.75 + ((gross-93400)*(28/100)));
        return this.fed_with;
      }
      else if(gross >= 192401 && gross <= 415600){
        // $46,278.75 plus 33% —$192,400
        this.fed_with = 46278.75 + ((gross-192400)*(33/100));
        return this.fed_with;
      }
      else if(gross >= 415601 && gross <= 417300){
      // $415,600 —$417,300 . . $119,934.75 plus 35% —$415,600
        this.fed_with = 119934.75 + ((gross-415600)*(35/100));
        return this.fed_with;
      }
      else {
        this.fed_with = gross*(39.6/100);
        return this.fed_with;
        }
    }

    married_rate(gross){
      this.gross = parseInt(gross);
      var gross = this.gross;

      if(gross < 11524 && gross >= 2250) {
        this.fed_with = gross*(10/100);
        return this.fed_with;
      }
      else if (gross >= 11525 && gross <= 39900){
        this.fed_with = 922.5 + ((gross-11525)*(15/100));
        return this.fed_with;
      }
      else if (gross >= 39990 && gross <= 93400){
        this.fed_with =  5156 + ((gross-39750)*(25/100));
        return this.fed_with;
      }
      else if(gross >= 93401 && gross <= 192400){
        // $18,558.75 plus 28% —$93,400
        this.fed_with = 18558.75 + ((gross-93400)*(28/100));
        return this.fed_with;
      }
      else if(gross >= 192401 && gross <= 415600){
        // $46,278.75 plus 33% —$192,400
        this.fed_with = 46278.75 + ((gross-192400)*(33/100));
        return this.fed_with;
      }
      else if(gross >= 415601 && gross <= 417300){
      // $415,600 —$417,300 . . $119,934.75 plus 35% —$415,600
        this.fed_with = 119934.75 + ((gross-415600)*(35/100));
        return this.fed_with;
      }
      else {
        this.fed_with = gross*(39.6/100);
        return this.fed_with;
        }
    }

}
