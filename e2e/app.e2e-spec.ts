import { UnosquareProjectPage } from './app.po';

describe('unosquare-project App', function() {
  let page: UnosquareProjectPage;

  beforeEach(() => {
    page = new UnosquareProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
