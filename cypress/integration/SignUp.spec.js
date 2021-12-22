/* eslint-disable prettier/prettier */
describe("Signup suite", () => {
  let user;

  beforeEach(() => {
    cy.task("newUser").then((newUser) => {
      user = newUser;
    });
    cy.visit("/");
    cy.get("[href='/signup']").click();
  });

  it("Sign up page should have title with logo, 'Sign up' text, 'Sign up' button, First Name, Last Name and text form fields", () => {
    cy.url().should("include", "/signup");

    cy.get("svg")
      .should("have.attr", "xmlns", "http://www.w3.org/2000/svg")
      .and("be.visible");
    cy.get('[data-test="signup-title"]')
      .should("have.attr", "data-test", "signup-title")
      .and("contain", "Sign Up");
    cy.get('[data-test="signup-submit"]')
      .click().should("be.disabled");
    cy.get('[data-test="signup-title"]').click();

    cy.get('[action="#"]').within(() => {
    cy.get('fieldset').eq(0).find("span").should("contain", "First Name");
    cy.get('fieldset').eq(1).find("span").should("contain", "Last Name");
    cy.get('fieldset').eq(2).find("span").should("contain", "Username");
    cy.get('fieldset').eq(3).find("span").should("contain", "Password");
    cy.get('fieldset').eq(4).find("span").should("contain", "Confirm Password");
  });
    cy.get('[href="/signin"]').should("contain", "Have an account? Sign In");
  });

  it("User should have an ability to create a new account", () => {
    cy.get("#firstName").type(user.userFirstName);
    cy.get("#lastName").type(user.userLastName);
    cy.get("#username").type(user.username);
    cy.get("#password").type(user.password);
    cy.get("#confirmPassword").type(user.passwordConfirm);
    cy.get('[data-test="signup-submit"]').should("not.be.disabled");
    cy.get("button.MuiButton-containedPrimary").should("have.attr", "type", "submit").and("contain", "Sign Up").click();
  });
});
