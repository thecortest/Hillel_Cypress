import { fuelExpensesPage } from '../pages/FuelExpensesPage';
import GeneralStep from './general-step';
import { Car } from '../data/constants/CarData';

const dayjs = require('dayjs');
let currentCountOfExpenses = 0;

export class FuelExpensesStep extends GeneralStep {
    addExpense(fuelExpense) {
        fuelExpensesPage.fuelExpensesButton().click();
        fuelExpensesPage.carSelectDropdown().contains(Car.brand + ' ' + Car.model);
        fuelExpensesPage.addExpenseButton().click();
        fuelExpensesPage.reportDateDateInput().click().clear().type(dayjs().format('DD.MM.YYYY'));
        fuelExpensesPage.mileageInput().click().clear().type(fuelExpense.mileage);
        fuelExpensesPage.numberOfLitersInput().click().clear().type(fuelExpense.numberOfLiters);
        fuelExpensesPage.totalCostInput().type(fuelExpense.totalCost);
        fuelExpensesPage.expenseAddButton().click().should('not.be.visible');
    }

    verifyThatCarExpenseIsAdded() {
        fuelExpensesPage.fuelExpensesButton().click();
        fuelExpensesPage.fuelExpensesTableBodyRow(0).should('be.visible');
    }

    removeFuelExpense() {
        fuelExpensesPage.fuelExpensesButton().click();
        fuelExpensesPage
            .fuelExpensesTableBodyRows()
            .its('length')
            .then((count) => {
                currentCountOfExpenses = count;
                fuelExpensesPage.fuelExpensesTableBodyRowRemoveButton(0).click({ force: true });
                fuelExpensesPage.removeEntryTitleModal().should('be.visible');
                fuelExpensesPage.removeEntryButton().click().should('not.be.visible');
            });
    }

    verifyThatCarExpenseIsRemoved() {
        fuelExpensesPage.fuelExpensesButton().click();
        if (currentCountOfExpenses > 1) {
            fuelExpensesPage.fuelExpensesTableBodyRows().should('have.length', currentCountOfExpenses - 1);
        } else {
            fuelExpensesPage.absentFuelExpensesText().should('be.visible');
        }
    }
}

export const fuelExpensesStep = new FuelExpensesStep();
