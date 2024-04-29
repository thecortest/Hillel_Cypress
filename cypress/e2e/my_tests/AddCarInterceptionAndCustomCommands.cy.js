/// <reference types="cypress" />
import { RegisteredUser } from '../../data/constants/UserData';
import { garageStep } from '../../steps/garage-step';
import { Car3 } from '../../data/constants/CarData';

describe('Test login with registered user', () => {
    beforeEach(() => {
        cy.visit(`/`);
        garageStep.login(RegisteredUser.email, RegisteredUser.password);
        garageStep.verifyThatLogOutButtonIsVisible();
    });

    it('Add new car', () => {
        cy.intercept('POST', 'api/cars').as('Car22');
        garageStep.addNewCar(Car3);
        cy.wait('@Car22').then((interception) => {
            expect(interception.response.statusCode).to.eq(201);
            expect(interception.response.body.data).to.have.property('id');
            Car3.id = interception.response.body.data.id;
        });
    });
    it('Get all cars via API', () => {
        cy.request('GET', '/api/cars').then((res) => {
            expect(res.status).to.equal(200);
            const carsList = res.body['data'];
            const foundCar = carsList.find(
                (resCar) => resCar.model === Car3.model && resCar.brand === Car3.brand && resCar.id === Car3.id,
            );
            expect(foundCar).to.not.be.undefined;
            expect(foundCar.id).to.equal(Car3.id);
        });
    });
    it('Add expense to the car via API and validate response', () => {
        cy.AddExpenseViaApiAndValidateResponse(Car3.id);
    });
    it('Find created car via UI and validate created expense', () => {
        cy.FindCarAndValidateAddedExpenseViaUi();
    });
});
