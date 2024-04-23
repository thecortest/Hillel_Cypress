/// <reference types="cypress" />
import { generalStep } from '../../steps/general-step';

describe('Registration of a new user for the "Garage" service', () => {
    it('Register a new user and validate data on the "Garage" page', () => {
        cy.visit(`/`);
        generalStep.registerNewUser();
    });
});
