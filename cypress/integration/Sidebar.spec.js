import sidebar from './PO/Sidebar';

describe('Sidebar', () => {
  const SideBar = new sidebar();
  let existingUser = {
    "username": "Snow",
    "password": "12345Qwert!"
  };

  beforeEach(() => {
    cy.visit('/signin');
    cy.get("#username").type(existingUser.username);
    cy.get("#password").type(existingUser.password);
    cy.get('[data-test="signin-submit"]').click();
    // cy.login();
  });

  it('Sidebar has avatar, username, account balance and menu list', () => {
    SideBar.sidebarMenu()
      .should('have.attr', 'data-test', 'sidenav')
      .and('be.visible')
      .within(() => {
        cy.get('.MuiSvgIcon-root.MuiAvatar-fallback').should('be.visible');
        cy.get('[data-test="sidenav-user-full-name"]').should('contain', 'John');
        cy.get('[data-test="sidenav-username"]').should('contain', 'Snow');
        cy.get('[data-test="sidenav-user-balance"]').should('contain', '$0.00');
        cy.get('h6.MuiTypography-subtitle2').eq(1).should('contain', 'Account Balance');
        cy.get('.MuiListItemIcon-root').eq(0).find('svg');
        cy.get('[data-test="sidenav-home"]').should('have.attr', 'href', '/').and('be.visible');
        cy.get('.MuiListItemText-root').eq(0).find('span').contains('Home');
        cy.get('.MuiListItemIcon-root').eq(1).find('svg')
        cy.get('[data-test="sidenav-user-settings"]').should('have.attr', 'href', '/user/settings').and('be.visible')
        cy.get('.MuiListItemText-root').eq(1).find('span').contains('My Account')
        cy.get('.MuiListItemIcon-root').eq(2).find('svg')
        cy.get('[data-test="sidenav-bankaccounts"]').should('have.attr', 'href', '/bankaccounts').and('be.visible')
        cy.get('.MuiListItemText-root').eq(2).find('span').contains('Bank Accounts')
        cy.get('.MuiListItemIcon-root').eq(3).find('svg')
        cy.get('[data-test="sidenav-notifications"]').should('have.attr', 'href', '/notifications').and('be.visible')
        cy.get('.MuiListItemText-root').eq(3).find('span').contains('Notifications')
        cy.get('.MuiListItemIcon-root').eq(4).find('svg')
        cy.get('[data-test="sidenav-signout"]').should('be.visible')
        cy.get('.MuiListItemText-root').eq(4).find('span').contains('Logout')
    });
  });
});
