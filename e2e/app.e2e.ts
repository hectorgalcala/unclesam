import { FlSamPage } from './app.po';

describe('fl-sam App', function() {
  let page: FlSamPage;

  beforeEach(() => {
    page = new FlSamPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fl-sam works!');
  });
});
