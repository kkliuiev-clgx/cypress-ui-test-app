describe("Signup suite", () => {
  let user;
  before(() => {
    cy.task("newUser").then((newUser) => {
      user = newUser;
    });
    cy.visit("/");
    cy.get("[href='/signup']").should("contain", "Don't have an account? Sign Up").click();
  });

  it("Sign up page should have title with logo, 'Sign up' text, 'Sign up' button, First Name, Last Name and other fields", () => {
    cy.url().should("include", "/signup");
    cy.get("svg").should("have.attr", "xmlns", "http://www.w3.org/2000/svg").and("be.visible");
    cy.get('[data-test="signup-title"]')
      .should("have.attr", "data-test", "signup-title")
      .and("contain", "Sign Up");
    cy.get('[href="/signin"]').should("contain", "Have an account? Sign In");
  });

  it("User should have an ability to create a new account", () => {
    cy.get("#firstName").type(user.userFirstName);
    cy.get("#lastName").type(user.userLastName);
    cy.get("#username").type(user.username);
    cy.get("#password").type(user.password);
    cy.get("#confirmPassword").type(user.passwordConfirm);
    cy.get("button.MuiButton-containedPrimary").should("have.attr", "type", "submit").click();
  });
});
