import { RokuAngularPage } from './app.po';

describe('roku-angular App', function() {
  let page: RokuAngularPage;

  beforeEach(() => {
    page = new RokuAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
