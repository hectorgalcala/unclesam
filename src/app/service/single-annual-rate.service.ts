import { Injectable } from '@angular/core';

@Injectable()
export class SingleAnnualRateService {
  // NOTE Service that is gonna compute Federal Taxes depending of your tax bracket;
  constructor() {
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

}
