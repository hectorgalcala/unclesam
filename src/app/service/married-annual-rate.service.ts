import { Injectable } from '@angular/core';

@Injectable()
export class MarriedAnnualRateService {

  constructor() {}

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
}
