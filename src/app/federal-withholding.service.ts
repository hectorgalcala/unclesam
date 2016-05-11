import { Injectable } from '@angular/core';

@Injectable()
export class FederalWithholdingService {
public fed_w: number;
  constructor() {
    console.log("hello");
  }

  fed_wh(gross, status){
    console.log("Fed Service working;");
    if(status === "single") {
      if(gross < 11524 && gross >= 2250) {
        this.fed_w = gross*(10/100);
        return this.fed_w;
      }
      else if (gross >= 11525 && gross <= 39900){
        this.fed_w = 922.5 + ((gross-11525)*(15/100));
        console.log("if: fed_w = 922.5 + ((gross-11525)*(15/100))");
        console.log(this.fed_w);
        return this.fed_w;
      }
      else if (gross >= 39990 && gross <= 93400){
        console.log("else if: gross >= 39751 && gross <= 93050");
        this.fed_w =  5156 + ((gross-39750)*(25/100));
        console.log(this.fed_w);
        return this.fed_w;
      }
      else if(gross >= 93400 && gross <= 192400){
        // $18,558.75 plus 28% —$93,400
        this.fed_w = 18558.75 + ((gross-93400)*(28/100));
        return this.fed_w;
      }
      else if(gross >= 192401 && gross <= 415600){
        // $46,278.75 plus 33% —$192,400
        this.fed_w = 46278.75 + ((gross-192400)*(33/100));
        return this.fed_w;
      }
      else if(gross >= 415601 && gross <= 417300){
      // $415,600 —$417,300 . . $119,934.75 plus 35% —$415,600
        this.fed_w = 119934.75 + ((gross-415600)*(35/100));
        return this.fed_w;
      }
      else{
        this.fed_w = gross*(39.6/100);
        console.log("else: fed_w = gross*(39.6/100)");
        console.log(this.fed_w);
        return this.fed_w;
        }
      }
    }

}
