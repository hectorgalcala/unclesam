export class TaxCalculatorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tax-calculator-app h1')).getText();
  }
}
