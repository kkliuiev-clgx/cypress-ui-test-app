export class SignUpPage {
    navigate () {
        cy.visit('signup');
    }

    CheckHeaderElementExistence () {
        cy.get('.makeStyles-logo-3').should('exist');
        cy.get('[data-test="signup-title"]').should('exist');
    }

    CheckFieldsExistence () {
        cy.get('#firstName').should('exist');
        cy.get('#lastName').should('exist');
        cy.get('#username').should('exist');
        cy.get('#password').should('exist');
        cy.get('#confirmPassword').should('exist');
    }

    CheckButtonsExistence () {
        cy.get('.MuiGrid-root > a').should('exist');
        cy.get('[data-test="signup-submit"]').should('exist');
    }

    clickAllFields () {
        cy.get('#firstName').click();
        cy.get('#lastName').click();
        cy.get('#username').click();
        cy.get('#password').click();
        cy.get('#confirmPassword').click();
        cy.get('.makeStyles-root-1').click();
    }

    CheckErrorMessagesExistence () {
        cy.get('#firstName-helper-text').should('exist');
        cy.get('#lastName-helper-text').should('exist');
        cy.get('#username-helper-text').should('exist');
        cy.get('#password-helper-text').should('exist');
        cy.get('#confirmPassword-helper-text').should('exist');
    }

    CheckErrorMessagesColor () {
        cy.get('#firstName-helper-text').should('have.css', 'color').and('eq', 'rgb(244, 67, 54)');
        cy.get('#lastName-helper-text').should('have.css', 'color').and('eq', 'rgb(244, 67, 54)');
        cy.get('#username-helper-text').should('have.css', 'color').and('eq', 'rgb(244, 67, 54)');
        cy.get('#password-helper-text').should('have.css', 'color').and('eq', 'rgb(244, 67, 54)');
        cy.get('#confirmPassword-helper-text').should('have.css', 'color').and('eq', 'rgb(244, 67, 54)');
    }

    InsertData (tipe) {
        cy.get('#firstName').click().type('1234');
        cy.get('#lastName').click().type('1234');
        cy.get('#username').click().type('1234');

        switch (tipe) {
            case "Password match error":
                cy.get('#password').click().type('1234');
                cy.get('#confirmPassword').click().type('1111');
                cy.get('#confirmPassword-helper-text').should('contain', 'Password does not match')
                break;
            case "Invalid Password error":
                cy.get('#password').click().type('123');
                cy.get('#confirmPassword').click().type('123');
                cy.get('#password-helper-text').should('contain', 'Password must contain at least 4 characters')
                break;
            case "Registration":
                cy.get('#password').click().type('1234');
                cy.get('#confirmPassword').click().type('1234');
                cy.get('[data-test="signup-submit"]').click();
                cy.get('.MuiTypography-h5').should('contain', 'Sign in')
                break;
        }
    }

    CheckRedirection () {
        cy.get('.MuiGrid-root > a').click();
        cy.get('.MuiTypography-h5').should('contain', 'Sign in');
    }
}

export class SignInPage {
    navigate () {
        cy.visit('signin');
    }

    CheckHeaderElementExistence () {
        cy.get('.makeStyles-logo-3').should('exist');
        cy.get('.MuiTypography-h5').should('exist');
    }

    CheckFieldsExistence () {
        cy.get('#username').should('exist');
        cy.get('#password').should('exist');

    }

    CheckButtonsExistence () {
        cy.get('.MuiFormControlLabel-root').should('exist');
        cy.get('[data-test="signin-submit"]').should('exist');
        cy.get('[data-test="signup"]').should('exist');
    }

    CheckErrors (tipe) {
        switch (tipe) {
            case "Username is required error":
                cy.get('.makeStyles-root-1').click();
                cy.get('#username-helper-text').should('contain', 'Username is required');
                break;
            
            case "Password error":
                cy.get('#username').click().type('1234');
                cy.get('#password').click().type('123');
                cy.get('.MuiTypography-h5').click();
                cy.get('#password-helper-text').should('contain', 'Password must contain at least 4 characters');
                break;

            case "Log in error":
                cy.get('#username').click().type('1235');
                cy.get('#password').click().type('1235');
                cy.get('[data-test="signin-submit"]').click();
                cy.get('[data-test="signin-error"]').should('contain', 'Username or password is invalid');
                break;
        }
    }

    CheckRedirection () {
        cy.get('.MuiGrid-root > a').click();
        cy.get('.MuiTypography-h5').should('contain', 'Sign Up');
    }

    LogIn () {
        cy.get('#username').click().type('1234');
        cy.get('#password').click().type('1234');
        cy.get('[data-test="signin-submit"]').click();
        cy.get('[data-test="user-onboarding-dialog-title"] > .MuiTypography-root').should('contain','Get Started with Real World App');
    }
}