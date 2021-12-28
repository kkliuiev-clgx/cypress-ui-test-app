class signup {
  signupPage() {
    return cy.get("[href='/signup']");
  }
  signUpBtn() {
    return cy.get('[href="https://www.usertesting.com/plans"]');
  }
  signupUrl() {
    return cy.url();
  }
  userAvatar() {
    return cy.get("svg");
  }
  signupTitle() {
    return cy.get('[data-test="signup-title"]');
  }
  submitBtn() {
    return cy.get('[data-test="signup-submit"]');
  }
  formSignUp() {
    return cy.get('[action="#"]');
  }
  firstName() {
    return cy.get("#firstName");
  }
  lastName() {
    return cy.get("#lastName");
  }
  userName() {
    return cy.get("#username");
  }
  password() {
    return cy.get("#password");
  }
  passwordConfirm() {
    return cy.get("#confirmPassword");
  }
  placeholder() {
    return cy.get('fieldset');
  }
  helperFirstName() {
    return cy.get('#firstName-helper-text')
  }
  helperLastName() {
    return cy.get('#lastName-helper-text')
  }
  helperUserName() {
    return cy.get('#username-helper-text')
  }
  helperPassword() {
    return cy.get('#password-helper-text');
  }
  helperPassConf() {
    return cy.get('#confirmPassword-helper-text')
  }
  hypertextSignin() {
    return cy.get('[href="/signin"]');
  }
  buttonText() {
    return cy.get("button.MuiButton-containedPrimary")
  }
}
export default signup;
