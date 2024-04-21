import { basePage } from './BasePage';

export class HomePage {
    get logout() {
        return cy.get('span.icon-logout', { timeout: 10000 });
    }
}

export const homePage = new HomePage();
