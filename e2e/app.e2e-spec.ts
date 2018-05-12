import { BrunoMineiroPage } from './app.po';

describe('brunomineiro App', function() {
  let page: BrunoMineiroPage;

  beforeEach(() => {
    page = new BrunoMineiroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mt works!');
  });
});
