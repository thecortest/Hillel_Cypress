/// <reference types="cypress" />
import { signUpPage } from "../../pages/SignUpPage";

function generateRandomEmail() {
    const userName = "thecortest" + Math.floor(Math.random() * 1000); //Generate random number from 0 to 1000 and add to "thecortest"
    const randomLetters = String.fromCharCode(97 + Math.floor(Math.random() * 26)); //Generate a random letter from a to z
    const domain = "gmail.com";

    return `${userName}${randomLetters}@${domain}`
}

const firstName = 'MyName';
const lastName = 'MySurname';
const randomEmail = generateRandomEmail();
const userPassword = 'G123#rw9Kwsx';

const user = {
    firstName: firstName,
    lastName: lastName,
    randomEmail: randomEmail,
    userPassword: userPassword
}

describe('Registration of a new user for the "Garage" service', () => {
    it('Register a new user and validate data on the "Garage" page', () => {
        cy.visit(`/`)
        signUpPage.signUpButton().click().should('exist');
        signUpPage.createNewUser(user);
        signUpPage.registerButton().click().should('exist');
        signUpPage.validateNewUserRegistered(user);
    })
});
