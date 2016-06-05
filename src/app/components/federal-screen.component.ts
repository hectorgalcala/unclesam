import {Component} from '@angular/core';
import {FederalTax} from '../models/federal-tax.interface';
import {FederalWithholdingService} from '../service/federal-withholding.service';

import {SingleAnnualRateService} from '../service/single-status/single-annual-rate.service';
import {MarriedAnnualRateService} from '../service/married-status/married-annual-rate.service';

import {SingleMonthlyRateService} from '../service/single-status/single-monthly-rate.service';
import {MarriedMonthlyRateService} from '../service/married-status/married-monthly-rate.service';

@Component({
  moduleId: module.id,
  selector: 'federal-screen',
  templateUrl: 'federal-screen.component.html',
  styleUrls: ['federal-screen.component.css'],
  providers:[FederalWithholdingService, SingleAnnualRateService, MarriedAnnualRateService, SingleMonthlyRateService, MarriedMonthlyRateService]
})
export class FederalScreenComponent {
  public social_security: number;
  public medicare: number;

  // This fields are inside FederalTax interface
  public gross_pay: number;
  public gross_ytd: number;
  public pay_freq: string;
  public fed_status: string;
  public fed_allow: number;
  public fed_with: number;

  public taxes: number;
  public net_pay: number;
  public monthly_pay: number;
  public semi_monthly_pay: number;
  public biweekly_pay: number;
  public weekly_pay: number;

  constructor(private fed_service: FederalWithholdingService) {
    this.setAllnull();
    this.gross_pay = 8332;
  }

  setAllnull() {
    this.fed_with = null;
    this.social_security = null;
    this.medicare = null;
    this.net_pay = null;
  }

  net_income(gross_pay, taxes) {
    this.net_pay = gross_pay - taxes;
    this.monthly_pay = this.net_pay/12;
    this.semi_monthly_pay = this.net_pay/24;
    this.biweekly_pay = this.net_pay/26;
    this.weekly_pay = this.net_pay/52;
  }

  compute_taxes() {
    this.social_security = this.gross_pay*0.062;
    this.medicare = this.gross_pay*0.0145;
    this.taxes = this.fed_with + this.social_security + this.medicare;
    // this.net_income(this.gross_pay, this.taxes);
  }

  fed_tax(gross, status, pay_freq) {
    // NOTE Blank HTML input elements === "" so when input is blank,  gross will be equal to zero. This way we wont a get a NaN issue.
    this.setAllnull();
    if (gross == "") {
      gross = 0;
    }
    this.gross_pay = parseInt(gross);
    this.fed_with = this.fed_service.fed_tax(this.gross_pay, status, pay_freq);
    this.compute_taxes();

  }



}
