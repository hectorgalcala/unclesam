import { Injectable } from '@angular/core';

@Injectable()
export class MarriedMonthlyRateService {
  public fed_with: number;
  // NOTE Service that is gonna compute Federal Taxes depending of your tax bracket;
  // TODO 
  constructor() {

  }

  poverty(gross){
    return gross < 8550;
  }

  low_class(gross){
    return gross < 27100 && gross >= 8550;
  }

  low_middle_class(gross){
    return gross >= 27100 && gross <= 83850;
  }

  middle_class(gross){
    return gross >= 83851 && gross <= 160450;
  }

  upper_middle_class(gross){
    return gross >= 160451 && gross <= 240000;
  }

  upper_class(gross){
    return gross >= 240001 && gross <= 421900;
  }

  high_upper_class(gross){
    return gross >= 421901 && gross <= 475500;
  }

  new_money(gross){
    return gross >= 475501;
  }

  computeFed(gross){

    if(this.poverty(gross)) {
      this.fed_with = 0;
    }

    else if(this.low_class(gross)) {
      this.fed_with = gross*(10/100);
    }

    else if (this.low_middle_class(gross)) {
      this.fed_with = 922.5 + ((gross-11525)*(15/100));
    }

    else if (this.middle_class(gross)){
      this.fed_with =  5156 + ((gross-39750)*(25/100));
    }

    else if(this.upper_middle_class(gross)) {
      // $18,558.75 plus 28% —$93,400
      this.fed_with = 18558.75 + ((gross-93400)*(28/100));
    }

    else if(this.upper_class(gross)) {
      // $46,278.75 plus 33% —$192,400
      this.fed_with = 46278.75 + ((gross-192400)*(33/100));
    }

    else if(this.high_upper_class(gross)) {
    // $415,600 —$417,300 . . $119,934.75 plus 35% —$415,600
      this.fed_with = 119934.75 + ((gross-415600)*(35/100));
    }

    else if(this.new_money(gross)) {
      this.fed_with = gross*(39.6/100);
      }

    else {
      console.log("Else happen in single rate()");
    }

    return this.fed_with;
  }

}
