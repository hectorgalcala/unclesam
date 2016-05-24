import { Injectable } from '@angular/core';

@Injectable()
export class FederalWithholdingService {
public fed_with: any;
public gross: any;
  constructor() {
    // console.log("federal with service");
    // this.fed_tax(5000,"single");
    this.fed_with = null;
  }

  fed_tax(gross, status){
    // console.log("Fed Service working;");
    // console.log("fed in fed service");
    console.log("typeof gross: ", typeof gross);
    console.log("typeof status: ", typeof status);
    if(status === "single") {
      console.log("if single--- typeof gross: ", typeof gross)
    return this.single_rate(gross);
      }
    if(status === "married"){
      this.married_rate(gross);
      }
    }

    test(test){
      console.log("TEST: ", test);
      console.log("TYPEOF TEST", typeof test);
      var test = test;
      // return test;
      // return 100000;
    }

    testing(test){
      console.log("testing..... typeof test: ", typeof test);
      console.log(test);
      return test;
    }
    single_rate(gross){

      var gross = gross
      console.log("typeof gross in single rate: ", typeof gross);
      if(gross < 2249) {
        this.fed_with = 0;
        return this.fed_with
      }
      else if(gross < 11524 && gross >= 2250) {
        console.log("1")
        console.log("typeof gross in single rate inside IF: ", typeof gross);;
        this.fed_with = gross*(10/100);
        return this.fed_with
      }
      else if (gross >= 11525 && gross <= 39900){
        console.log("2");
        this.fed_with = 922.5 + ((gross-11525)*(15/100));
        // console.log("if: fed_with = 922.5 + ((gross-11525)*(15/100))");
        // console.log(this.fed_with);
        return this.fed_with;
      }
      else if (gross >= 39991 && gross <= 93400){
        console.log("3");
        // console.log("else if: gross >= 39751 && gross <= 93050");
        this.fed_with =  5156 + ((gross-39750)*(25/100));
        // console.log(this.fed_with);
        return this.fed_with;
      }
      else if(gross >= 93401 && gross <= 192400){
        console.log("4");
        // $18,558.75 plus 28% —$93,400
        this.fed_with = Math.round(18558.75 + ((gross-93400)*(28/100)));
        return this.fed_with;
      }
      else if(gross >= 192401 && gross <= 415600){
        console.log("5");
        // $46,278.75 plus 33% —$192,400
        this.fed_with = 46278.75 + ((gross-192400)*(33/100));
        return this.fed_with;
      }
      else if(gross >= 415601 && gross <= 417300){
        console.log("6");
      // $415,600 —$417,300 . . $119,934.75 plus 35% —$415,600
        this.fed_with = 119934.75 + ((gross-415600)*(35/100));
        return this.fed_with;
      }
      else {
        console.log("7");
              console.log("typeof gross in ELSE: ", typeof gross);
        this.fed_with = gross*(39.6/100);
        // console.log("else: fed_with = gross*(39.6/100)");
        // console.log(this.fed_with);
        return this.fed_with;
        }
    }

    married_rate(gross){
      this.gross = parseInt(gross);
      var gross = this.gross;
      console.log("typeof gross in married rate: ", typeof gross);
      if(gross < 11524 && gross >= 2250) {
        this.fed_with = gross*(10/100);
        return this.fed_with;
      }
      else if (gross >= 11525 && gross <= 39900){
        this.fed_with = 922.5 + ((gross-11525)*(15/100));
        // console.log("if: fed_with = 922.5 + ((gross-11525)*(15/100))");
        // console.log(this.fed_with);
        return this.fed_with;
      }
      else if (gross >= 39990 && gross <= 93400){
        // console.log("else if: gross >= 39751 && gross <= 93050");
        this.fed_with =  5156 + ((gross-39750)*(25/100));
        // console.log(this.fed_with);
        return this.fed_with;
      }
      else if(gross >= 93401 && gross <= 192400){
        // $18,558.75 plus 28% —$93,400
        this.fed_with = 18558.75 + ((gross-93400)*(28/100));
        return this.fed_with;
      }
      else if(gross >= 192401 && gross <= 415600){
        // $46,278.75 plus 33% —$192,400
        this.fed_with = 46278.75 + ((gross-192400)*(33/100));
        return this.fed_with;
      }
      else if(gross >= 415601 && gross <= 417300){
      // $415,600 —$417,300 . . $119,934.75 plus 35% —$415,600
        this.fed_with = 119934.75 + ((gross-415600)*(35/100));
        return this.fed_with;
      }
      else{
        this.fed_with = gross*(39.6/100);
        // console.log("else: fed_with = gross*(39.6/100)");
        // console.log(this.fed_with);
        return this.fed_with;
        }
    }

}
