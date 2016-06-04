import {Component} from '@angular/core';
import {FederalTax} from '../models/federal-tax.interface';
import {FederalWithholdingService} from '../service/federal-withholding.service';
import {SingleAnnualRateService} from '../service/single-status/single-annual-rate.service';
import {MarriedAnnualRateService} from '../service/married-status/married-annual-rate.service';

@Component({
  moduleId: module.id,
  selector: 'federal-screen',
  templateUrl: 'federal-screen.component.html',
  styleUrls: ['federal-screen.component.css'],
  providers:[FederalWithholdingService, SingleAnnualRateService, MarriedAnnualRateService]
})
export class FederalScreenComponent implements FederalTax {
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
    this.setAllnull();
    this.gross_pay = 5000;
  }

  setAllnull(){
    this.fed_w = null;
    this.social_security = null;
    this.medicare = null;
    this.net_pay = null;
  }

  net_income(gross_pay, taxes){
    this.net_pay = gross_pay - taxes;
    this.monthly_pay = this.net_pay/12;
    this.semi_monthly_pay = this.net_pay/24;
    this.biweekly_pay = this.net_pay/26;
    this.weekly_pay = this.net_pay/52;
  }

  compute_taxes(){
    this.social_security = this.gross_pay*0.062;
    this.medicare = this.gross_pay*0.0145;
    this.taxes = this.fed_w + this.social_security + this.medicare;
    this.net_income(this.gross_pay, this.taxes);
  }

  fed_tax(gross, status, pay_freq){
    // NOTE Blank HTML input elements === "" so when input is blank,  gross will be equal to zero. This way we wont a get a NaN issue.
    this.setAllnull();
    console.log(pay_freq);
    if (gross == ""){
      gross = 0;
    }
    this.gross_pay = parseInt(gross);

    if(status == "single") {
      this.fed_w = this.fed_service.fed_tax(this.gross_pay, status, pay_freq);
      this.compute_taxes();
    }

    if (status == "married"){
      this.fed_w = this.fed_service.fed_tax(gross, status, pay_freq);
      this.compute_taxes();
    }

  }

}