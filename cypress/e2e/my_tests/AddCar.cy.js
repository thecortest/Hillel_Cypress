/// <reference types="cypress" />
import { RegisteredUser } from '../../data/constants/UserData';
import { garageStep } from '../../steps/garage-step';
import { Car } from '../../data/constants/CarData';

describe('Test login with registered user', () => {
    beforeEach(() => {
        cy.visit(`/`);
        garageStep.login(RegisteredUser.email, RegisteredUser.password);
        garageStep.verifyThatLogOutButtonIsVisible();
    });

    it('Add new car', () => {
        garageStep.addNewCar(Car);
    });
    it('Verify that car is added', () => {
        garageStep.verifyThatCarItemIsAdded();
    });
});
