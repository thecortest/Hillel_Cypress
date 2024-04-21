/// <reference types="cypress" />
import { generalStep } from '../../steps/general-step';
import { RegisteredUser } from '../../data/constants/UserData';

describe('Test login with registered user', () => {
    beforeEach(() => {
        cy.visit(`/`);
        generalStep.login(RegisteredUser.email, RegisteredUser.password);
        generalStep.verifyThatLogOutButtonIsVisible();
    });
    it('Log in with registered user', () => {
        cy.log(RegisteredUser.password);
    });
});
