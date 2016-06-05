import { Injectable } from '@angular/core';

@Injectable()
export class SingleMonthlyRateService {
  public fed_with: number;
  // NOTE Service that is gonna compute Federal Taxes depending of your tax bracket;
  constructor() {
  }

  poverty(gross){
    return gross < 188;
  }

  low_class(gross){
    return gross > 188 && gross <= 960;
  }

  low_middle_class(gross){
    return gross >= 961 && gross <= 3325;
  }

  middle_class(gross){
    return gross >= 3326 && gross <= 7783;
  }

  upper_middle_class(gross){
    return gross >= 7784 && gross <= 16033;
  }

  upper_class(gross){
    return gross >= 16034 && gross <= 34633;
  }

  high_upper_class(gross){
    return gross >= 34634 && gross <= 34775;
  }

  new_money(gross){
    return gross >= 34776;
  }

  computeFed(gross){
    if(this.poverty(gross)) {
      this.fed_with = 0;
    }
    else if(this.low_class(gross)) {
      this.fed_with = gross*(10/100);
    }
    else if (this.low_middle_class(gross)) {
      this.fed_with = 77.20 + ((gross-960)*(15/100));
    }
    else if (this.middle_class(gross)) {
      this.fed_with =  431.95 + ((gross-3325)*(25/100));
    }
    else if(this.upper_middle_class(gross)) {
      this.fed_with = 1546.45 + ((gross-7783)*(28/100));
    }
    else if(this.upper_class(gross)) {
      this.fed_with = 3856.45 + ((gross-16033)*(33/100));
    }
    else if(this.high_upper_class(gross)) {
      this.fed_with = 9994.45 + ((gross-34633)*(35/100));
    }
    else if (this.new_money(gross)) {
      this.fed_with = 10044 + gross*(39.6/100);
    }
    else {
      console.log("Else happen in single rate()");
    }
      return this.fed_with;
  }


}
