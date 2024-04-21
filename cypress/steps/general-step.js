import { signUpPage } from '../pages/SignUpPage';
import { homePage } from '../pages/HomePage';
import { User } from '../data/constants/UserData';

export default class GeneralStep {
    registerNewUser() {
        signUpPage.signUpButton().click().should('exist');
        signUpPage.createNewUser(User);
        signUpPage.registerButton().click().should('exist');
        signUpPage.validateNewUserRegistered(User);
    }

    logOut() {
        homePage.logout.should('exist').click();
    }
    login(email, password) {
        signUpPage.findButtomByText('Sign In').click();
        signUpPage.signInEmail().type(email);
        signUpPage.signInPassword().type(password);
        signUpPage.findButtomByText('Login').click();
    }

    verifyThatLogOutButtonIsVisible() {
        homePage.logout.should('exist');
    }
}

export const generalStep = new GeneralStep();
