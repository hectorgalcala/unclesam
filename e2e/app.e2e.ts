import { HomeScreenPage } from './app.po';

describe('fl-sam App', function() {
  let page: HomeScreenPage;

  beforeEach(() => {
    page = new HomeScreenPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fl-sam works!');
  });
});
