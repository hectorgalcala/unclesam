import { Component } from '@angular/core';
import {FederalWithholdingService} from '../service/federal-withholding.service';


@Component({
  moduleId: module.id,
  selector: 'fl-sam-app',
  templateUrl: 'fl-sam.component.html',
  styleUrls: ['fl-sam.component.css'],
  providers:[FederalWithholdingService]
})
export class FlSamAppComponent {

  public social_security: number;
  public medicare: number;
  public gross_pay: number;
  public gross_pay_method: number;
  public gross_ytd: number;
  public pay_freq: string;
  public fed_status: string;
  public fed_allow: number;
  public fed_w: any;
  public taxes: number;
  public net_pay: number;
  public monthly_pay: number;
  public semi_monthly_pay: number;
  public biweekly_pay: number;
  public weekly_pay: number;

  constructor(private fed_service: FederalWithholdingService){
    // this.fed_tax(100000, "single");
    this.gross_pay = null;
    this.fed_w = null;
    this.social_security = null;
    this.medicare = null;
    this.net_pay = null;
    // console.log(this.fed_service);

  }

  net_income(gross_pay, taxes){
    this.net_pay = gross_pay - taxes;
    this.monthly_pay = this.net_pay/12;
    this.semi_monthly_pay = this.net_pay/24;
    this.biweekly_pay = this.net_pay/26;
    this.weekly_pay = this.net_pay/52;
  }

  fed_compute(gross, status){

  }

  fed_tax(gross, status){
    this.gross_pay = parseInt(gross)
    // console.log("fedtax gross: typeof", typeof gross);
    // var that = this;
  if(status === "single") {
    this.fed_w = this.fed_service.fed_tax(this.gross_pay, status);
    this.social_security = this.gross_pay*0.062
    this.medicare = this.gross_pay*0.0145
    this.taxes  = this.fed_w+this.social_security + this.medicare
    this.net_income(this.gross_pay, this.taxes);
  }

  if(status=="married"){
    this.fed_w = this.fed_service.fed_tax(gross, status);
    console.log(this.fed_w);
    }
  }

}
