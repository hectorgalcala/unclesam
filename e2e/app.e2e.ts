import { TaxCalculatorPage } from './app.po';

describe('tax-calculator App', function() {
  let page: TaxCalculatorPage;

  beforeEach(() => {
    page = new TaxCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tax-calculator works!');
  });
});
