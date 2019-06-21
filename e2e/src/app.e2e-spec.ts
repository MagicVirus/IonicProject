import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/login');
    });
    it('should have a title saying Login', () => {
      page.getPageOneTitleText().then(title => {
        expect(title).toEqual('Login');
      });
    });
  });
});
