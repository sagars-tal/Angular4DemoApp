import { DemoappPage } from './app.po';

describe('demoapp App', () => {
  let page: DemoappPage;

  beforeEach(() => {
    page = new DemoappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
