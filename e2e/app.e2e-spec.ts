import { InvestmentManagementAppPage } from './app.po';

describe('investment-management-app App', () => {
  let page: InvestmentManagementAppPage;

  beforeEach(() => {
    page = new InvestmentManagementAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
