import { RegisteredUser } from '../../../data/constants/UserData';
import { fuelExpensesStep } from '../../../steps/fuel-expenses-step';
import { FuelExpense } from '../../../data/constants/FuelExpenseData';

describe('Test login with registered user', () => {
    beforeEach(() => {
        cy.visit(`/`);
        fuelExpensesStep.login(RegisteredUser.email, RegisteredUser.password);
        fuelExpensesStep.verifyThatLogOutButtonIsVisible();
    });

    it('Add fuel expense', () => {
        fuelExpensesStep.addExpense(FuelExpense);
    });
    it('Verify that expense is added', () => {
        fuelExpensesStep.verifyThatCarExpenseIsAdded();
    });
});
