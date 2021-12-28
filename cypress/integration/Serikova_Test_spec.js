describe ('Sign Up tests', () => {
    it('Elements existance', () => {
        cy.visit('http://localhost:3000/signup');

        cy.get('.makeStyles-logo-3').should('exist');
        cy.get('[data-test="signup-title"]').should('exist');
        cy.get('#firstName').should('exist');
        cy.get('#lastName').should('exist');
        cy.get('#username').should('exist');
        cy.get('#password').should('exist');
        cy.get('#confirmPassword').should('exist');
        cy.get('.MuiGrid-root > a').should('exist');
        cy.get('[data-test="signup-submit"]').should('exist');

        cy.get('#firstName').click();
        cy.get('#lastName').click();
        cy.get('#username').click();
        cy.get('#password').click();
        cy.get('#confirmPassword').click();
        cy.get('.makeStyles-root-1').click();
        
        cy.get('#firstName-helper-text').should('exist');
        cy.get('#lastName-helper-text').should('exist');
        cy.get('#username-helper-text').should('exist');
        cy.get('#password-helper-text').should('exist');
        cy.get('#confirmPassword-helper-text').should('exist');

        
        cy.get('#firstName-helper-text').should('have.css', 'color').and('eq', 'rgb(244, 67, 54)');
        cy.get('#lastName-helper-text').should('have.css', 'color').and('eq', 'rgb(244, 67, 54)');
        cy.get('#username-helper-text').should('have.css', 'color').and('eq', 'rgb(244, 67, 54)');
        cy.get('#password-helper-text').should('have.css', 'color').and('eq', 'rgb(244, 67, 54)');
        cy.get('#confirmPassword-helper-text').should('have.css', 'color').and('eq', 'rgb(244, 67, 54)');

        //cy.get('#firstName').should('have.css', 'color').and('eq', 'rgb(244, 67, 54)');
    }); 

    it('Password match error', () => {
        cy.visit('http://localhost:3000/signup');

        cy.get('#firstName').click().type('1234');
        cy.get('#lastName').click().type('1234');
        cy.get('#username').click().type('1234');
        cy.get('#password').click().type('1234');
        cy.get('#confirmPassword').click().type('1111');
        cy.get('#confirmPassword-helper-text').should('contain', 'Password does not match')
    });

    it('Invalid Password error', () => {
        cy.visit('http://localhost:3000/signup');

        cy.get('#firstName').click().type('1234');
        cy.get('#lastName').click().type('1234');
        cy.get('#username').click().type('1234');
        cy.get('#password').click().type('123');
        cy.get('#confirmPassword').click().type('123');
        cy.get('#password-helper-text').should('contain', 'Password must contain at least 4 characters')
    });

    it('Registration', () => {
        cy.visit('http://localhost:3000/signup');

        cy.get('#firstName').click().type('1234');
        cy.get('#lastName').click().type('1234');
        cy.get('#username').click().type('1234');
        cy.get('#password').click().type('1234');
        cy.get('#confirmPassword').click().type('1234');
        cy.get('[data-test="signup-submit"]').click();
        cy.get('.MuiTypography-h5').should('contain', 'Sign in')
    });

    it('Sign in Redirection', () => {
        cy.visit('http://localhost:3000/signup');

        cy.get('.MuiGrid-root > a').click();
        cy.get('.MuiTypography-h5').should('contain', 'Sign in');
    });
});

describe ('Sign Ip tests', () => {
    it('Elements existance', () => {
        cy.visit('http://localhost:3000/signin');

        cy.get('.makeStyles-logo-3').should('exist');
        cy.get('.MuiTypography-h5').should('exist');
        cy.get('#username').should('exist');
        cy.get('#password').should('exist');
        cy.get('.MuiFormControlLabel-root').should('exist');
        cy.get('[data-test="signin-submit"]').should('exist');
        cy.get('[data-test="signup"]').should('exist');
    });
    
    it('Username is required error', () => {
        cy.visit('http://localhost:3000/signin');

        cy.get('.makeStyles-root-1').click();
        cy.get('#username-helper-text').should('contain', 'Username is required');
    });

    it('Password error', () => {
        cy.visit('http://localhost:3000/signin');

        cy.get('#username').click().type('1234');
        cy.get('#password').click().type('123');
        cy.get('.MuiTypography-h5').click();
        cy.get('#password-helper-text').should('contain', 'Password must contain at least 4 characters');
    });

    it('Sign UP Redirection', () => {
        cy.visit('http://localhost:3000/signin');

        cy.get('.MuiGrid-root > a').click();
        cy.get('.MuiTypography-h5').should('contain', 'Sign Up');
    });

    it('Log in', () => {
        cy.visit('http://localhost:3000/signin');

        cy.get('#username').click().type('1234');
        cy.get('#password').click().type('1234');
        cy.get('[data-test="signin-submit"]').click();
        cy.get('[data-test="user-onboarding-dialog-title"] > .MuiTypography-root').should('contain','Get Started with Real World App');
    });

    it('Log in error', () => {
        cy.visit('http://localhost:3000/signin');

        cy.get('#username').click().type('1235');
        cy.get('#password').click().type('1235');
        cy.get('[data-test="signin-submit"]').click();
        cy.get('[data-test="signin-error"]').should('contain', 'Username or password is invalid');
    });
});