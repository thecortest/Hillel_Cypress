/// <reference types="cypress" />
import { RegisteredUser } from '../../data/constants/UserData';
import { garageStep } from '../../steps/garage-step';

describe('Test login with registered user', () => {
    beforeEach(() => {
        cy.visit(`/`);
        garageStep.login(RegisteredUser.email, RegisteredUser.password);
        garageStep.verifyThatLogOutButtonIsVisible();
    });

    it('Remove car', () => {
        garageStep.removeCar();
    });

    it('Verify that car is removed', () => {
        garageStep.verifyThatCarItemIsRemoved();
    });
});
