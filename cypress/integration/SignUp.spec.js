describe("Signup", () => {
  let user;
  before(() => {
    cy.task("newUser").then((newUser) => {
      user = newUser;
    });
  });

  it("User should have an ability to create a new account", () => {
    cy.visit("/");
    cy.get("[href='/signup']").should("contain", "Don't have an account? Sign Up").click();
    cy.url().should("include", "/signup");
    cy.get("#firstName").type(user.userFirstName);
    cy.get("#lastName").type(user.userLastName);
    cy.get("#username").type(user.username);
    cy.get("#password").type(user.password);
    cy.get("#confirmPassword").type(user.passwordConfirm);
    cy.get("button.MuiButton-containedPrimary").should("have.attr", "type", "submit").click();
  });
});
