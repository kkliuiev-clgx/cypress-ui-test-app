describe('Sign in suite', () => {
  let existingUser = {
    "username": "Snow",
    "password": "12345Qwert!"
  };

  it('Existing user should be able to login', () => {
    cy.visit('/')
    cy.get("button").should("have.attr", "type", "submit");
    cy.get("#username").type(existingUser.username);
    cy.get("#password").type(existingUser.password);
    cy.get().click();
  });
});
