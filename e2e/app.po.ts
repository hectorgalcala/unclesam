export class HomeScreenPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fl-sam-app h1')).getText();
  }
}
