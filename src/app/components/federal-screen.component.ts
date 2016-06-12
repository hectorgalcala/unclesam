
// Angular 2 objects
import {Component} from '@angular/core';

// Interface
import {FederalTax} from '../models/federal-tax.interface';

// Services
import {FederalWithholdingService} from '../service/federal-withholding.service';

// Annual Rate Federal Withholding
import {SingleAnnualRateService} from '../service/single-status/single-annual-rate.service';
import {MarriedAnnualRateService} from '../service/married-status/married-annual-rate.service';

// Monthly Rate Federal Withholding
import {SingleMonthlyRateService} from '../service/single-status/single-monthly-rate.service';
import {MarriedMonthlyRateService} from '../service/married-status/married-monthly-rate.service';

// Income Statement data such as Salary After Taxes
import {IncomeStatementService} from '../service/income-statement/income-statement.service';

@Component({
  moduleId: module.id,
  selector: 'federal-screen',
  templateUrl: 'federal-screen.component.html',
  styleUrls: ['federal-screen.component.css'],
  providers:[FederalWithholdingService, IncomeStatementService, SingleAnnualRateService, MarriedAnnualRateService, SingleMonthlyRateService, MarriedMonthlyRateService]
})
export class FederalScreenComponent {

  // Additional w2/payroll taxes
  public social_security: number;
  public medicare: number;

  // This fields are inside FederalTax interface

  // Data for taxable income
  public gross_pay: number;
  public gross_ytd: number;
  public pay_freq: string;
  public fed_status: string;
  public fed_allow: number;
  public fed_with: number;

  // Financial data
  public taxes: number;
  public net_pay: number;
  public annual_pay: number;
  public monthly_pay: number;
  public semi_monthly_pay: number;
  public biweekly_pay: number;
  public weekly_pay: number;

  constructor(private fed_service: FederalWithholdingService, private income_statement: IncomeStatementService) {
    this.setAllnull();
    this.gross_pay = 50000;
  }

  setAllnull() {
    this.fed_with = null;
    this.social_security = null;
    this.medicare = null;
    this.gross_pay = null;
  }

  yearly_net_income(gross_pay, taxes) {
    this.annual_pay = gross_pay - taxes;
    this.monthly_pay = this.annual_pay/12;
    this.semi_monthly_pay = this.annual_pay/24;
    this.biweekly_pay = this.annual_pay/26;
    this.weekly_pay = this.annual_pay/52;
  }

  monthly_net_income(gross_pay, taxes){
    this.annual_pay = (gross_pay - taxes)*12;
    this.monthly_pay = this.annual_pay/12
    this.semi_monthly_pay = this.annual_pay/24;
    this.biweekly_pay = this.annual_pay/26
    this.weekly_pay = this.annual_pay/52;
  }

  compute_taxes() {
    this.social_security = this.gross_pay*0.062;
    this.medicare = this.gross_pay*0.0145;
    this.taxes = this.fed_with + this.social_security + this.medicare;
    if(this.pay_freq == "monthly"){
      this.monthly_net_income(this.gross_pay, this.taxes);
    }

    if(this.pay_freq == "annually"){
      this.yearly_net_income(this.gross_pay, this.taxes);
    }
  }

  // NOTE Blank HTML input elements === "" so when input is blank,  gross will be equal to zero. This way we wont a get a NaN issue.
  fed_tax(gross, status, pay_freq) {
    if (gross == "") {
      gross = 0;
    }
    this.gross_pay = parseInt(gross);
    this.fed_status = status;
    this.pay_freq = pay_freq;
    this.fed_with = this.fed_service.fed_tax(this.gross_pay, this.fed_status, this.pay_freq);
    this.compute_taxes();
  }

}
