/* eslint-disable prettier/prettier */
describe('Friends', () => {
  let existingUser = {
  "username": "Snow",
  "password": "12345Qwert!"
};

  beforeEach(() => {
    cy.visit('/');
    cy.get("#username")
      .type(existingUser.username);
    cy.get("#password")
      .type(existingUser.password);
    cy.get('[data-test="signin-submit"]')
      .click();
    cy.get('[href="/contacts"]')
      .click()
    // cy.login();
    
  });

  it('"Friends" page has logo, [Create Transaction] button, pages links, bell icon, users list and filter fields', () => {
    cy.get('[xmlns="http://www.w3.org/2000/svg"]').should("be.visible");
    cy.get('[data-test="nav-top-new-transaction"]').should('be.visible').and("contain", " New");
    cy.get(".MuiBadge-root").should('have.attr', 'data-test', 'nav-top-notifications-count').find("path")
    cy.get('.MuiTabs-centered').within(() => {
        cy.get(".MuiButtonBase-root").eq(0).should('have.attr', 'href', '/').and("contain", "Everyone");
        cy.get(".MuiButtonBase-root").eq(1).should('have.attr', 'href', '/contacts').and("contain", "Friends");
        cy.get(".MuiButtonBase-root").eq(2).should('have.attr', 'href', '/personal').and("contain", "Mine");
    })
    cy.get('[data-test="empty-list-header"]')
      .contains("No Transactions");
    cy.contains('[data-test="transaction-list-empty-create-transaction-button"]', 'Create A Transaction')
      .should('have.attr', 'href', '/transaction/new')
      .and('exist')
  })

  it('User can view filtered transactions by data, by setting values in data field', () => {
    cy.get('[data-test="transaction-list-filter-date-range-button"]')
      .contains('span', 'Date: ALL')
      .click({force: true});
    cy.get('[aria-label="Calendar"]')
      .should('be.visible');
    cy.get('[data-date="2021-12-25"]')
      .should('contain', '25')
      .click();
    cy.get('.Cal__Day__selection')
      .should('have.attr', 'data-date', '2021-12-25')
      .within(() => {
        cy.get('.Cal__Day__month').contains('Dec');
        cy.get('.Cal__Day__day').contains('25');
        
      });
    cy.contains('[title="Change year"]', '2021')
      .and('be.visible');
    cy.contains('[title="Scroll to Dec 25th"]', '25th')
      .and('be.visible');
    cy.get('.Cal__Day__selection')
      .click();
    cy.get('.MuiChip-label')
      .should('contain', 'Date: Dec, 24 2021 - Dec, 25 2021');
      cy.get('[data-test="transaction-list-filter-date-clear-button"] > path')
      .click({force: true});
    cy.get('[data-test="transaction-list-filter-date-range-button"]')
        .contains('span', 'Date: ALL')
    })

  it('User can view filtered transactions by amount range, by setting values in amount range field', () => {
    cy.get('[data-test="transaction-list-filter-amount-range-button"]')
      .contains('Amount: $0 - $1,000')
      .click({force: true});
      cy.get('[data-test="transaction-list-filter-amount-range-text"]')
      .should('be.visible');
    cy.get('[data-test="transaction-list-filter-amount-range-slider"]')
      .invoke('val', 500)
      .trigger('change')
      .click();
    cy.get('[data-test="transaction-list-filter-amount-range-text"]')
      .contains('Amount Range: $0 - $500')
      .and('be.visible');
    cy.get('[data-test="transaction-list-filter-amount-clear-button"]')
      .contains('Clear')
      .click({force: true});
    cy.get('[data-test="transaction-list-filter-amount-range-text"]')
      .contains('Amount Range: $0 - $1,000')
      .type('{esc}');
  })
});