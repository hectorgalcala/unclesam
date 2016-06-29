// Angular 2 objects
import {Component, OnInit} from '@angular/core';

// Models
import {Paycheck} from '../models/paycheck.model';
import {IncomeStatement} from '../models/income-statement.model';
// Services
import {FederalWithholdingService} from '../services/federal-withholding.service';

// Annual Rate Federal Withholding
import {SingleAnnualRateService} from '../services/single-status/single-annual-rate.service';
import {MarriedAnnualRateService} from '../services/married-status/married-annual-rate.service';

// Monthly Rate Federal Withholding
import {SingleMonthlyRateService} from '../services/single-status/single-monthly-rate.service';
import {MarriedMonthlyRateService} from '../services/married-status/married-monthly-rate.service';

// Income Statement data such as Salary After Taxes
import {IncomeStatementService} from '../services/income-statement/income-statement.service';

@Component({
  moduleId: module.id,
  selector: 'federal-screen',
  templateUrl: 'federal-screen.component.html',
  styleUrls: ['federal-screen.component.css'],
  providers:[FederalWithholdingService, IncomeStatementService, SingleAnnualRateService, MarriedAnnualRateService, SingleMonthlyRateService, MarriedMonthlyRateService]
})
export class FederalScreenComponent implements OnInit{

  // Additional w2/payroll taxes
  public paycheck: any;
  public income_statement: any;

  // Financial data
  public taxes: number;
  public net_pay: number;
  public annual_pay: number;
  public monthly_pay: number;
  public semi_monthly_pay: number;
  public biweekly_pay: number;
  public weekly_pay: number;

  constructor(private fed_service: FederalWithholdingService) {

  }

  ngOnInit(){
    this.paycheck = new Paycheck();
    this.income_statement = new IncomeStatement();
    this.setAllnull();
    this.paycheck.gross_pay = 50000;
    this.fed_tax(this.paycheck.gross_pay, "single", "annually");

  }

  setAllnull(){
    this.paycheck.fed_with = null;
    this.paycheck.social_security = null;
    this.paycheck.medicare = null;
    this.paycheck.gross_pay = null;
  }

  yearly_net_income(gross_pay, taxes){
    this.income_statement.annual_pay = (gross_pay - taxes);
    this.income_statement.monthly_pay = this.income_statement.annual_pay/12
    this.income_statement.semi_monthly_pay = this.income_statement.annual_pay/24;
    this.income_statement.biweekly_pay = this.income_statement.annual_pay/26
    this.income_statement.weekly_pay = this.income_statement.annual_pay/52;
    console.log("income statement model: ", this.income_statement);
  }

  monthly_net_income(gross_pay, taxes){
    this.income_statement.annual_pay = (gross_pay - taxes)*12;
    this.income_statement.monthly_pay = this.income_statement.annual_pay/12
    this.income_statement.semi_monthly_pay = this.income_statement.annual_pay/24;
    this.income_statement.biweekly_pay = this.income_statement.annual_pay/26
    this.income_statement.weekly_pay = this.income_statement.annual_pay/52;
    console.log("income statement model: ", this.income_statement);
  }


  compute_taxes(){
    this.paycheck.social_security = this.social_security_tax(this.paycheck.gross_pay);
    this.paycheck.medicare = this.medicare_tax(this.paycheck.gross_pay);
    this.income_statement.taxes = this.paycheck.fed_with + this.paycheck.social_security + this.paycheck.medicare;
    if(this.paycheck.pay_freq == "monthly"){
      this.monthly_net_income(this.paycheck.gross_pay, this.income_statement.taxes);
    }

    if(this.paycheck.pay_freq == "annually"){
      this.yearly_net_income(this.paycheck.gross_pay, this.income_statement.taxes);
    }
  }

  social_security_tax(gross){
    if(gross >= 118500){
      this.paycheck.social_security = 118500*0.062;
    }
    else {
      this.paycheck.social_security = gross*0.062;
    }
      return this.paycheck.social_security;
  }

  medicare_tax(gross){
    if(gross >= 200000){
    this.paycheck.medicare = 200000*0.0145 + ((gross - 200000)*0.0235);
    }
    else {
    this.paycheck.medicare = gross*0.0145;
    }
      return this.paycheck.medicare;
  }

  // NOTE Blank HTML input elements === "" so when input is blank,  gross will be equal to zero. This way we wont a get a NaN issue.
  fed_tax(gross, status, pay_freq) {
    if (gross == "") {
      gross = 0;
    }
    this.paycheck.gross_pay = parseInt(gross);
    this.paycheck.fed_status = status;
    this.paycheck.pay_freq = pay_freq;
    this.paycheck.fed_with = this.fed_service.fed_tax(this.paycheck.gross_pay, this.paycheck.fed_status, this.paycheck.pay_freq);
    this.compute_taxes();
  }

}
