import { MyPagePage } from './app.po';

describe('my-page App', () => {
  let page: MyPagePage;

  beforeEach(() => {
    page = new MyPagePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
