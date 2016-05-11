import { Component } from '@angular/core';
import {FederalWithholdingService} from './federal-withholding.service';

@Component({
  moduleId: module.id,
  selector: 'fl-sam-app',
  templateUrl: 'fl-sam.component.html',
  styleUrls: ['fl-sam.component.css'],
  providers:[FederalWithholdingService]
})
export class FlSamAppComponent {
  public gross_pay: number;
  public gross_pay_method: number;
  public gross_ytd: number;
  public pay_freq: string;
  public fed_status: string;
  public fed_allow: number;
  public fed_w: number;
  constructor(private fed_service: FederalWithholdingService){
    console.log("Uncle sam on the move");
    this.fed_tax(93400, "single");
  }

  net_income(gross_pay, taxes){
    return gross_pay - taxes;
  }

  fed_compute(gross, status){

  }

  fed_tax(gross, status){
  if(status === "single") {
    this.fed_service.fed_wh(gross, status);
  }

  if(status=="married_jointly"){

    }

  if(status=="married_separate"){

    }

  if(status=="head_household"){

    }

  }

}
