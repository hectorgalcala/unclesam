import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'fl-sam-app',
  templateUrl: 'fl-sam.component.html',
  styleUrls: ['fl-sam.component.css']
})
export class FlSamAppComponent {
  public gross_pay: number;
  public gross_pay_method: number;
  public gross_ytd: number;
  public pay_freq: string;
  public fed_status: string;
  public fed_allow: number;
  constructor(){
    console.log("Uncle sam on the move");
    fed_tax()
  }

  net_income(gross_pay, taxes){
    return gross_pay - taxes;
  }

  taxes(gross){
    var fed = this.fed_tax(gross, null)
  }

  fed_tax(gross, status){
  var fed_w;
  if(status =="single") {
    if (gross >= 11525 && gross <= 39750){
      fed_w = 922.5 + ((gross-11525)*(15/100));
      console.log("if: fed_w = 922.5 + ((gross-11525)*(15/100))");
      console.log(fed_w);
      return fed_w;
    }
    else if (gross >= 39751 && gross <= 93050){
      console.log("else if: gross >= 39751 && gross <= 93050");
      fed_w =  5156 + ((gross-39750).to_f*(25/100));
      console.log(fed_w);
      return fed_w;
    }
    else{
      fed_w = gross*(39/100);
      console.log("else: fed_w = gross*(39/100)");
      console.log(fed_w);
      return fed_w;
    }
  }

  if(status=="married_jointly"){

  }

  if(status=="married_separate"){

  }

  if(status=="head_household"){

  }
}

  tax_cheat(amount){
    // var payments = [];
    // var total;
    // // calcTaxes(amount){
    //   var tax = 0;
    //     if(amount >186350){
    //   tax = (amount - 186350) * .33 + 907.5;
    // }
    // else if(amount > 89350){
    //     tax = (amount - 89350) * .28 + 907.5+(36900-9072)*.15+(89350-36900)*.25;
    // }
    // else if( amount > 36900){
    // tax = (amount - 36900) * .25 + 907.5+(36900-9072)*.15;
    // }
    // else if(amount > 9075){
    // tax = (amount - 9075) * .15 + 907.5;
    // }
    // else{
    //    tax = amount * .10;
    //     }
    // tax += amount * .153;
    // return tax;
    /*
    10% on taxable income from $0 to $9,075, plus
  15% on taxable income over $9,075 to $36,900, plus
  25% on taxable income over $36,900 to $89,350, plus
  28% on taxable income over $89,350 to $186,350, plus
  33% on taxable income over $186,350 to $405,100, plus
  35% on taxable income over $405,100 to $406,750, plus
  39.6% on taxable income over $406,750.
    */
  // }

  // $("#addTrans").click(function () {
  //     payments.push({
  //         amount: parseInt($("#Earned").val()),
  //         date:$("#Date").val()});
  //     total = 0;
  //     for(x in payments){
  //     total += payments[x].amount;
  //     }
  //     $("#total").html(total);
  //     $("#Earned").val("");
  //     $("#taxes").html(calcTaxes(total));
  // });
  }
}
