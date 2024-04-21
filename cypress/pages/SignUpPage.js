export class SignUpPage {
    signUpButton() {
        return cy.xpath(`//button[@class='hero-descriptor_btn btn btn-primary']`);
    }

    signupName() {
        return cy.xpath(`//input[@id='signupName']`);
    }

    signupLastName() {
        return cy.xpath(`//input[@id='signupLastName']`);
    }

    signupEmail() {
        return cy.xpath(`//input[@id='signupEmail']`);
    }

    signupPassword() {
        return cy.xpath(`//input[@id='signupPassword']`);
    }

    signupRepeatPassword() {
        return cy.xpath(`//input[@id='signupRepeatPassword']`);
    }

    registerButton() {
        return cy.xpath(`//button[@class='btn btn-primary']`);
    }

    panelProfileUrl() {
        return cy.xpath(`//a[@href='/panel/profile']`);
    }

    panelGarageUrl() {
        return cy.xpath(`//a[@href='/panel/garage']`);
    }

    profileButton() {
        return cy.xpath(`//a[@class='btn btn-white btn-sidebar sidebar_btn -profile']`);
    }

    profileName() {
        return cy.xpath(`//p[@class='profile_name display-4']`);
    }

    createNewUser(user) {
        this.signupName().type(user.firstName).should('have.value', user.firstName);
        this.signupLastName().type(user.lastName).should('have.value', user.lastName);
        this.signupEmail().type(user.randomEmail).should('have.value', user.randomEmail);
        this.signupPassword().type(user.userPassword).should('have.value', user.userPassword);
        this.signupRepeatPassword().type(user.userPassword).should('have.value', user.userPassword);
    }

    validateNewUserRegistered(user) {
        this.panelGarageUrl();
        this.profileButton().contains('Profile').click();
        this.panelProfileUrl();
        this.profileName().should('contain.text', user.firstName + ' ' + user.lastName);
    }

    findButtomByText(text) {
        return cy.get('button').contains(text);
    }

    signInEmail() {
        return cy.get('#signinEmail');
    }

    signInPassword() {
        return cy.get('#signinPassword');
    }
}

export const signUpPage = new SignUpPage();
