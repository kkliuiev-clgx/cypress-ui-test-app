/* eslint-disable prettier/prettier */
describe("Sign in suite", () => {
  let existingUser = {
    "username": "Snow",
    "password": "12345Qwert!"
  };

  beforeEach(() => {
    cy.visit("/signin");
  });

  it('Sign in page has Logo, Sign in title, Sign up link and text form fields', () => {
    cy.get("svg").should("have.attr", "xmlns", "http://www.w3.org/2000/svg").and("be.visible");

    cy.get("#username-label")
      .should("contain", "Username");
    cy.get("#password-label")
      .should("contain", "Password");

    cy.get('[data-test="signup"]')
      .should("have.attr", "href", "/signup")
      .and("contain", "Don't have an account? Sign Up");
  });

  it(`User can't login with blank username field - page shows message "Username is required"`, () => {
    cy.get("#username")
      .click();
    cy.get("#password")
      .click();
    cy.get("#username-helper-text")
      .should("contain", "Username is required");
    cy.get('[data-test="signin-submit"]')
        .click({force: true})
        .should("be.disabled");
  });
  
  it('Existing user should be able to login', () => {
    cy.get('[data-test="signin-submit"]')
      .click().should("be.disabled");

    cy.get("#username")
      .type(existingUser.username);
      
    cy.get("#password")
      .type(existingUser.password);

    cy.contains(".MuiFormControlLabel-root", "Remember me")
      .find(".PrivateSwitchBase-input-14")
      .should("have.attr", "type", "checkbox")
      .and('be.not.checked');
    cy.get(".PrivateSwitchBase-input-14")
      .check()
      .should('be.checked')
      .uncheck()
      .should("not.be.checked");

    cy.get('[data-test="signin-submit"]')
      .find(".MuiButton-label")
      .should("contain", "Sign In");
    cy.get('[data-test="signin-submit"]')
      .should("not.be.disabled");
    cy.get('[data-test="signin-submit"]')
      .should("be.not.disabled");
    cy.get('[data-test="signin-submit"]')
      .click();
  });

  it(`User with unexciting username shouldn't be able to Log in`, () => {
    cy.get("#username")
    .type('Chris');
    cy.get("#password")
    .type("12345Qwert!");
    cy.get('[data-test="signin-submit"]')
      .click();
    cy.get('.MuiAlert-message')
      .should('contain', 'Username or password is invalid')
      .and('be.visible');
  });

  it(`User with existing username and invalid password shouldn't be able to Log in`, () => {
    cy.get("#username")
    .type('Chris');
    cy.get("#password")
    .type("122345Qwert!");
    cy.get('[data-test="signin-submit"]')
      .click();
    cy.get('.MuiAlert-message')
      .should('contain', 'Username or password is invalid')
      .and('be.visible');
  });
});
