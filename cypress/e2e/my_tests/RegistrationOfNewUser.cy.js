/// <reference types="cypress" />

function generateRandomEmail() {
    const userName = "thecortest" + Math.floor(Math.random() * 1000); //Generate random number from 0 to 1000 and add to "thecortest"
    const randomLetters = String.fromCharCode(97 + Math.floor(Math.random() * 26)); //Generate a random letter from a to z
    const domain = "gmail.com";

    return `${userName}${randomLetters}@${domain}`
}

const baseUrl = 'qauto2.forstudy.space/';
const username = 'guest';
const password = 'welcome2qauto';
const firstName = 'MyName';
const lastName = 'MySurname';
const randomEmail = generateRandomEmail();
const userPassword = 'G123#rw9Kwsx';
const fullName = `${firstName} ${lastName}`

describe('Registration of a new user for the "Garage" service', () => {
    it('Register a new user and validate data on the "Garage" page', () => {
        cy.visit(`https://${username}:${password}@${baseUrl}`);
        cy.get('button').contains('Sign up').click();
        cy.get('input#signupName').type(firstName).should('have.value', firstName);
        cy.get('input#signupLastName').type(lastName).should('have.value', lastName);
        cy.get('input#signupEmail').type(randomEmail).should('have.value', randomEmail);
        cy.get('input#signupPassword').type(userPassword).should('have.value', userPassword);
        cy.get('input#signupRepeatPassword').type(userPassword).should('have.value', userPassword);
        cy.get('button').contains('Register').click();

        cy.url().should('include', 'https://qauto2.forstudy.space/panel/garage');
        cy.get('.sidebar_btn-group').contains('Profile').click();
        cy.get('app-profile').find('.panel-page').find('.panel-page_content').find('.profile').find('.profile_name').contains(fullName);
       
      
    })
});
