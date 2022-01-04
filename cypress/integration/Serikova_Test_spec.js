import {SignUpPage, SignInPage} from "../page-objects/page";

describe ('Sign Up tests', () => {
    const signUpPage = new SignUpPage()
    

    beforeEach (() => {
        signUpPage.navigate();
    })

    it('Elements existance', () => {
        signUpPage.CheckHeaderElementExistence();
        signUpPage.CheckFieldsExistence();
        signUpPage.CheckButtonsExistence();
        signUpPage.clickAllFields();
        signUpPage.CheckErrorMessagesExistence();
        signUpPage.CheckErrorMessagesColor();
    }); 

    it('Password match error', () => {
        signUpPage.InsertData("Password match error");
    });

    it('Invalid Password error', () => {
        signUpPage.InsertData("Invalid Password error");
    });

    it('Registration', () => {
        signUpPage.InsertData("Registration");
    });

    it('Sign in Redirection', () => {
        signUpPage.CheckRedirection();
    });
});

describe ('Sign In tests', () => {

    const signInPage = new SignInPage()

    beforeEach (() => {
        signInPage.navigate()
    })

    it('Elements existance', () => {
        signInPage.CheckHeaderElementExistence();
        signInPage.CheckFieldsExistence();
        signInPage.CheckButtonsExistence();
    });
    
    it('Username is required error', () => {
        signInPage.CheckErrors('Username is required error');
    });

    it('Password error', () => {
        signInPage.CheckErrors('Password error');
    });

    it('Sign UP Redirection', () => {
        signInPage.CheckRedirection();
    });

    it('Log in', () => {
        signInPage.LogIn();
    });

    it('Log in error', () => {
        signInPage.CheckErrors('Log in error');
    });
});