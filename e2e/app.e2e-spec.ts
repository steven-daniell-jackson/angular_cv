import { AngCvPage } from './app.po';

describe('ang-cv App', () => {
  let page: AngCvPage;

  beforeEach(() => {
    page = new AngCvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
