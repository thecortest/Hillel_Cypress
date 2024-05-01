import { User } from '../../../data/constants/UserData';
import { garageStep } from '../../../steps/garage-step';
import { generalStep } from '../../../steps/general-step';
import { Car } from '../../../data/constants/CarData';
import { homePage } from '../../../pages/HomePage';

describe('Register new user via API', () => {
    before(() => {
        //runs once before all tests
        //Register new user via API
        cy.api({
            method: 'POST',
            url: '/api/auth/signup',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                name: User.firstName,
                lastName: User.lastName,
                email: User.randomEmail,
                password: User.userPassword,
                repeatPassword: User.userPassword,
            },
        }).then((resp) => {
            cy.log(JSON.stringify(resp));
            expect(resp.status).to.equal(201);
        });
        cy.visit(`/`); //logging in to verify token
        homePage.logout.should('exist').click(); // log out after registration
    });

    beforeEach(() => {
        // runs before every test(it) block
        //Log in with registered user via UI
        cy.visit(`/`);
        generalStep.login(User.randomEmail, User.userPassword);
        generalStep.verifyThatLogOutButtonIsVisible();
    });

    it('Add new car via UI', () => {
        garageStep.addNewCar(Car);
    });

    it('Add all cars via API', () => {
        cy.api('GET', '/api/cars').then((res) => {
            expect(res.status).to.equal(200);
            const carsList = res.body['data'];
            const foundCar = carsList.find((resCar) => resCar.model === Car.model && resCar.brand === Car.brand);
            expect(!!foundCar).to.be.true;
        });
    });
});
