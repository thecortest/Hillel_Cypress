// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { Car3 } from '../data/constants/CarData';
import { FuelExpense } from '../data/constants/FuelExpenseData';
import { fuelExpensesPage } from '../pages/FuelExpensesPage';

const dayjs = require('dayjs');
const today = dayjs();

Cypress.Commands.add('AddExpenseViaApiAndValidateResponse', (carId) => {
    cy.request({
        method: 'POST',
        url: '/api/expenses',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: {
            carId,
            reportedAt: today.format('YYYY.MM.DD'),
            mileage: FuelExpense.mileage,
            liters: FuelExpense.numberOfLiters,
            totalCost: FuelExpense.totalCost,
            forceMileage: false,
        },
    }).then((resp) => {
        cy.log(JSON.stringify(resp));
        expect(resp.status).to.equal(200);
        expect(resp.body.data).to.have.property('id');
        expect(resp.body.data.carId).to.equal(carId);
        expect(resp.body.data.reportedAt).to.equal(today.format('YYYY.MM.DD'));
        expect(resp.body.data.mileage).to.equal(FuelExpense.mileage);
        expect(resp.body.data.liters).to.equal(FuelExpense.numberOfLiters);
        expect(resp.body.data.totalCost).to.equal(FuelExpense.totalCost);
    });
});

Cypress.Commands.add('FindCarAndValidateAddedExpenseViaUi', () => {
    fuelExpensesPage.fuelExpensesButton().click();
    fuelExpensesPage
        .carSelectDropdownMenu()
        .find('li')
        .eq(0)
        .contains(Car3.brand + ' ' + Car3.model);
    fuelExpensesPage.fuelExpensesTableBodyRowCell(0, today.format('DD.MM.YYYY'), 0);
    fuelExpensesPage.fuelExpensesTableBodyRowCell(1, FuelExpense.mileage, 0);
    fuelExpensesPage.fuelExpensesTableBodyRowCell(2, FuelExpense.numberOfLiters, 0);
    fuelExpensesPage.fuelExpensesTableBodyRowCell(3, FuelExpense.totalCost, 0);
});
