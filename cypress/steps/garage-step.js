import { garagePage } from '../pages/GaragePage';
import GeneralStep from './general-step';

let currentCountOfCarItems = 0;

export class GarageStep extends GeneralStep {
    addNewCar(car) {
        garagePage.addCarButton().click();
        garagePage.selectBrandDropwown().select(car.brand);
        garagePage.selectModelDropwown().select(car.model);
        garagePage.mileageInput().type(car.mileage);
        garagePage.carAddButton().click();
    }

    verifyThatCarItemIsAdded() {
        garagePage.carItem().should('exist');
    }

    removeCar() {
        garagePage
            .carListItem()
            .its('length')
            .then((count) => {
                currentCountOfCarItems = count;
                garagePage.editCarButton(0).click();
                garagePage.carRemoveButton().click();
                garagePage.removeCarButton().click();
            });
    }

    verifyThatCarItemIsRemoved() {
        if (currentCountOfCarItems > 1) {
            garagePage.carListItem().should('have.length', currentCountOfCarItems - 1);
        } else {
            garagePage.emptyGarageText().should('be.visible');
        }
    }
}

export const garageStep = new GarageStep();
