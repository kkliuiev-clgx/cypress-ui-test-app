import { userFieldsValidator } from "../../backend/validators";
import {SignUpPage, SignInPage} from "../page-objects/page";

describe ('Sign Up tests', () => {
    const signUpPage = new SignUpPage()
    

    beforeEach (() => {
        signUpPage.navigate();
    })

    it('Elements existance', () => {
        signUpPage.logo().should('exist');
        signUpPage.signupTitle().should('exist');
        signUpPage.firstNameField().should('exist');
        signUpPage.lastNameField().should('exist');
        signUpPage.usernameField().should('exist');
        signUpPage.passwordField().should('exist');
        signUpPage.confirmPasswordField().should('exist');
        signUpPage.signInLink().should('exist');
        signUpPage.submitButton().should('exist');
        signUpPage.firstNameField().click();
        signUpPage.lastNameField().click();
        signUpPage.usernameField().click();
        signUpPage.passwordField().click();
        signUpPage.confirmPasswordField().click();
        signUpPage.signInLink().click();
        signUpPage.firstNameHelperText().should('exist');
        signUpPage.lastNameHelperText().should('exist');
        signUpPage.UsernameHelperText().should('exist');
        signUpPage.passwordHelperText().should('exist');
        signUpPage.confirmPasswordHelperText().should('exist');
        signUpPage.firstNameHelperText().should('have.css', 'color').and('eq', 'rgb(244, 67, 54)');
        signUpPage.lastNameHelperText().should('have.css', 'color').and('eq', 'rgb(244, 67, 54)');
        signUpPage.UsernameHelperText().should('have.css', 'color').and('eq', 'rgb(244, 67, 54)');
        signUpPage.passwordHelperText().should('have.css', 'color').and('eq', 'rgb(244, 67, 54)');
        signUpPage.confirmPasswordHelperText().should('have.css', 'color').and('eq', 'rgb(244, 67, 54)');
    }); 

    it('Password match error', () => {
        signUpPage.firstNameField().click().type('1234');
        signUpPage.lastNameField().click().type('1234');
        signUpPage.usernameField().type('1234');
        signUpPage.passwordField().click().type('1234');
        signUpPage.confirmPasswordField().click().type('1111');
        signUpPage.confirmPasswordHelperText().should('contain', 'Password does not match')
    });

    it('Invalid Password error', () => {
        signUpPage.firstNameField().click().type('1234');
        signUpPage.lastNameField().click().type('1234');
        signUpPage.usernameField().type('1234');
        signUpPage.passwordField().click().type('123');
        signUpPage.confirmPasswordField().click().type('123');
        signUpPage.passwordHelperText().should('contain', 'Password must contain at least 4 characters')
    });

    it('Registration', () => {
        signUpPage.firstNameField().click().type('1234');
        signUpPage.lastNameField().click().type('1234');
        signUpPage.usernameField().type('1234');
        signUpPage.passwordField().click().type('1234');
        signUpPage.confirmPasswordField().click().type('1234');
        signUpPage.submitButton().click();
        signUpPage.signInTitle().should('contain', 'Sign in')
    });

    it('Sign in Redirection', () => {
        signUpPage.signInLink().click();
        signUpPage.signInTitle().should('contain', 'Sign in');
    });
});

describe ('Sign In tests', () => {

    const signInPage = new SignInPage()

    beforeEach (() => {
        signInPage.navigate()
    })

    it ('show mock data', () => {
        cy.intercept('POST', 'login', {fixture: 'userData.json'});
        signInPage.usernameField().click().type('1234');
        signInPage.passwordField().click().type('1234');
        signInPage.submitButton().click();
        signInPage.loggedInUserTitle().should('contain','Get Started with Real World App');
    })

    it('Elements existance', () => {
        signInPage.logo().should('exist');
        signInPage.signInTitle().should('exist');
        signInPage.usernameField().should('exist');
        signInPage.passwordField().should('exist');
        signInPage.remmemberMeBox().should('exist');
        signInPage.submitButton().should('exist');
        signInPage.signUpLink().should('exist');
    });
    
    it('Username is required error', () => {
        signInPage.page().click();
        signInPage.UsernameHelperText().should('contain', 'Username is required');
    });

    it('Password error', () => {
        signInPage.usernameField().click().type('1234');
        signInPage.passwordField().click().type('123');
        signInPage.signInTitle().click();
        signInPage.passwordHelperText().should('contain', 'Password must contain at least 4 characters');
    });

    it('Sign UP Redirection', () => {
        signInPage.signUpLink().click();
        signInPage.signUpTitle().should('contain', 'Sign Up');
    });

    it('Log in', () => {
        signInPage.usernameField().click().type('1234');
        signInPage.passwordField().click().type('1234');
        signInPage.submitButton().click();
        signInPage.loggedInUserTitle().should('contain','Get Started with Real World App');
    });

    it('Log in error', () => {
        signInPage.usernameField().click().type('1235');
        signInPage.passwordField().click().type('1235');
        signInPage.submitButton().click();
        signInPage.errorMessage().should('contain', 'Username or password is invalid');
    });
});