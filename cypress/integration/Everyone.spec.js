/* eslint-disable prettier/prettier */
describe('Everyone', () => {
  let existingUser = {
  "username": "Snow",
  "password": "12345Qwert!"
};

  beforeEach(() => {
    cy.visit('/signin');
    cy.get("#username")
      .type(existingUser.username);
    cy.get("#password")
      .type(existingUser.password);
    cy.get('[data-test="signin-submit"]')
      .click();
    // cy.login();
  });

  it('"Everyone" page has logo, "new" button, pages links, bell icon, users list and filter fields', () => {
    cy.get('[xmlns="http://www.w3.org/2000/svg"]').should("be.visible");
    cy.get('[data-test="nav-top-new-transaction"]').should('be.visible').and("contain", " New");
    cy.get(".MuiBadge-root").should('have.attr', 'data-test', 'nav-top-notifications-count').find("path")
    cy.get('.MuiTabs-centered').within(() => {
        cy.get(".MuiTab-wrapper").eq(0).should("contain", "Everyone");
        cy.get(".MuiTab-wrapper").eq(1).should("contain", "Friends");
        cy.get(".MuiTab-wrapper").eq(2).should("contain", "Mine");
    })
    cy.get('.ReactVirtualized__Grid__innerScrollContainer').should('have.attr', 'role', 'rowgroup').within(() => {
        cy.get('div').find('li').eq(0)
        cy.get('div').find('li').eq(1)
        cy.get('div').find('li').eq(2).should('have.attr', 'data-test', 'transaction-item-Ke0eaLoOG8Dg');
        cy.get('div').find('li').eq(3).should('have.attr', 'data-test', 'transaction-item-8YnLpItFazLO');
    });
      
    cy.get('.MuiAvatar-root.MuiAvatar-circular').should('be.visible');
    cy.get('.MuiBadge-badge.MuiBadge-anchorOriginBottomRightCircle').should('be.visible')
    cy.get('.MuiTypography-body1').should('contain', 'Arely Kertzmann paid Kaylin')
    cy.get('.MuiTypography-body2').should('contain', "Payment:");

    cy.get('.MuiGrid-align-items-xs-flex-start').within(() => {
        cy.get('.MuiGrid-root.MuiGrid-item').eq(0).find('svg');
        cy.get('p').eq(0).should('have.attr', 'data-test', "transaction-like-count").and('contain', '0');
        cy.get('.MuiGrid-root.MuiGrid-item').eq(1).find('svg');
        cy.get('p').eq(1).should('have.attr', 'data-test', "transaction-comment-count").and('contain', '0');
    })
  });

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
        cy.get('.Cal__Day__month').contains('Today');
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

  it('User can view filtered transactions by amounr range, by setting values in amount range field', () => {
    cy.get('[data-test="transaction-list-filter-amount-range-button"]')
      .contains('Amount: $0 - $1,000')
      .click({force: true});
    cy.get('#amount-range-popover > .MuiPaper-root')
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
      .click();
    cy.get('[data-test="transaction-list-filter-amount-range-text"]')
      .contains('Amount Range: $0 - $1,000')
      .type('{esc}');
  })
});
