import { RegisteredUser } from '../../../data/constants/UserData';
import { fuelExpensesStep } from '../../../steps/fuel-expenses-step';

describe('Test login with registered user', () => {
    beforeEach(() => {
        cy.visit(`/`);
        fuelExpensesStep.login(RegisteredUser.email, RegisteredUser.password);
        fuelExpensesStep.verifyThatLogOutButtonIsVisible();
    });

    it('Remove fuel expense', () => {
        fuelExpensesStep.removeFuelExpense();
    });
    it('Verify that expense is removeded', () => {
        fuelExpensesStep.verifyThatCarExpenseIsRemoved();
    });
});
