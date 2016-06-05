import { Injectable } from '@angular/core';

@Injectable()
export class MarriedMonthlyRateService {
  public fed_with: number;
  // NOTE Service that is gonna compute Federal Taxes depending of your tax bracket;
  // TODO
  constructor() {

  }

  poverty(gross){
    return gross < 713;
  }

  low_class(gross){
    return gross > 713 && gross >= 2258;
  }

  low_middle_class(gross){
    return gross > 2258 && gross <= 6988;
  }

  middle_class(gross){
    return gross >= 6989 && gross <= 13371;
  }

  upper_middle_class(gross){
    return gross >= 13371 && gross <= 20000 ;
  }

  upper_class(gross){
    return gross >= 20001 && gross <= 35158;
  }

  high_upper_class(gross){
    return gross >= 35159 && gross <= 39625;
  }

  new_money(gross){
    return gross > 39625;
  }

  computeFed(gross){
    if(this.poverty(gross)) {
      this.fed_with = 0;
    }

    else if(this.low_class(gross)) {
      this.fed_with = gross*(10/100);
    }

    else if (this.low_middle_class(gross)) {
      this.fed_with = 154.5 + ((gross-2258)*(15/100));
    }

    else if (this.middle_class(gross)){
      this.fed_with =  864 + ((gross-6988)*(25/100));
    }

    else if(this.upper_middle_class(gross)) {
      // $18,558.75 plus 28% —$93,400
      this.fed_with = 2459.75 + ((gross-13371)*(28/100));
    }

    else if(this.upper_class(gross)) {
      // $46,278.75 plus 33% —$192,400
      this.fed_with = 4315.87 + ((gross-20000)*(33/100));
    }

    else if(this.high_upper_class(gross)) {
    // $415,600 —$417,300 . . $119,934.75 plus 35% —$415,600
      this.fed_with = 9318.01 + ((gross-35158)*(35/100));
    }

    else if(this.new_money(gross)) {
      this.fed_with = 10881.46 + gross*(39.6/100);
      }

    else {
      console.log("Else happen in single rate()");
    }

    return this.fed_with;
  }

}
