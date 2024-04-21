export class BasePage {
    header() {
        return cy.get('header');
    }

    footer() {
        return cy.get('footer');
    }
}

export const basePage = new BasePage();
