export class SignUpPage {
    navigate () {
        cy.visit('signup');
    }

    logo (){
        return cy.get('.makeStyles-logo-3');
    }

    signupTitle (){
        return cy.get('[data-test="signup-title"]');
    }

    firstNameField(){
        return cy.get('#firstName');
    }

    lastNameField(){
        return cy.get('#lastName');
    }

    
    usernameField(){
        return cy.get('#username');
    }

    passwordField(){
        return cy.get('#password');
    }

    confirmPasswordField(){
        return cy.get('#confirmPassword');
    }

    signInLink(){
        return cy.get('.MuiGrid-root > a');
    }

    submitButton(){
        return cy.get('[data-test="signup-submit"]');
    }

    firstNameHelperText(){
        return cy.get('#firstName-helper-text');
    }

    UsernameHelperText(){
        return cy.get('#username-helper-text');
    }

    lastNameHelperText(){
        return cy.get('#lastName-helper-text');
    }

    passwordHelperText(){
        return cy.get('#password-helper-text');
    }

    confirmPasswordHelperText(){
        return cy.get('#confirmPassword-helper-text');
    }

    signInTitle(){
        return cy.get('.MuiTypography-h5');
    }
}

export class SignInPage {
    navigate () {
        cy.visit('signin');
    }

    logo(){
        return cy.get('.makeStyles-logo-3');
    }

    signInTitle(){
        return cy.get('.MuiTypography-h5');
    }

    usernameField(){
        return cy.get('#username');
    }

    passwordField(){
        return cy.get('#password');
    }

    remmemberMeBox(){
        return cy.get('.MuiFormControlLabel-root');
    }

    submitButton(){
        return cy.get('[data-test="signin-submit"]');
    }

    signUpLink(){
        return cy.get('[data-test="signup"]');
    }

    page(){
        return cy.get('.makeStyles-root-1');
    }

    UsernameHelperText(){
        return cy.get('#username-helper-text');
    }

    passwordHelperText(){
        return cy.get('#password-helper-text');
    }

    signUpTitle(){
        return cy.get('.MuiTypography-h5');
    }

    loggedInUserTitle(){
        return cy.get('[data-test="user-onboarding-dialog-title"] > .MuiTypography-root');
    }

    errorMessage(){
        return cy.get('[data-test="signin-error"]');
    }

}