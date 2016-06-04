import { Injectable } from '@angular/core';

@Injectable()
export class SingleMonthlyRateService {
  public fed_with: number;
  // NOTE Service that is gonna compute Federal Taxes depending of your tax bracket;
  constructor() {
  }

  test(){
    console.log("Hello single monthly");
  }

  poverty(gross){
    return gross < 2249;
  }

  low_class(gross){
    return gross < 11524 && gross >= 2250;
  }

  low_middle_class(gross){
    return gross >= 11525 && gross <= 39900;
  }

  middle_class(gross){
    return gross >= 39991 && gross <= 93400;
  }

  upper_middle_class(gross){
    return gross >= 93401 && gross <= 192400;
  }

  upper_class(gross){
    return gross >= 192401 && gross <= 415600;
  }

  high_upper_class(gross){
    return gross >= 415601 && gross <= 417300;
  }

  new_money(gross){
    return gross >= 417301;
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
    else if (this.middle_class(gross)) {
      this.fed_with =  5156 + ((gross-39750)*(25/100));
    }
    else if(this.upper_middle_class(gross)) {
      this.fed_with = Math.round(18558.75 + ((gross-93400)*(28/100)));
    }
    else if(this.upper_class(gross)) {
      this.fed_with = 46278.75 + ((gross-192400)*(33/100));
    }
    else if(this.high_upper_class(gross)) {
      this.fed_with = 119934.75 + ((gross-415600)*(35/100));
    }
    else if (this.new_money(gross)) {
      this.fed_with = gross*(39.6/100);
    }

    else {
      console.log("Else happen in single rate()");
    }

      return this.fed_with;
  }


}
