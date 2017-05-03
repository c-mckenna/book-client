import { BookClientPage } from './app.po';

describe('book-client App', () => {
  let page: BookClientPage;

  beforeEach(() => {
    page = new BookClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
