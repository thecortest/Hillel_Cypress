/// <reference types="cypress" />

import { basePage } from "./BasePage";

export class GaragePage {

    homeButton () {
        return basePage.header().find('.header_logo');
    }

    garageButton () {
        return basePage.header().find('a.btn.header-link').contains('Garage').should('have.attr', 'href', '/panel/garage')
    }

    garageMainPage () {
        return cy.get('app-garage');
    }

    garageTitle () {
        return this.garageMainPage().find('div.panel-page_heading').contains('Garage');
    }

    addCarButton () {
        return this.garageMainPage().find('button').contains('Add car');
    }

    emptyGarageText () {
        return this.garageMainPage().find('p.panel-empty_message').contains('You don’t have any cars in your garage')
    }

    emptyGarageCarSvg () {
        return this.garageMainPage().find('svg');
    }

    globalCarModal () {
        return cy.get('ngb-modal-window').find('div.modal-content');
    }

    addCarTitleModal () {
        return this.globalCarModal().find('.modal-title').contains('Add a car');
    }

    brandFieldLabel () {
        return this.globalCarModal().find('.form-group label').contains('Brand');
    }

    selectBrandDropwown () {
        return this.globalCarModal().find('select#addCarBrand');
    }

    modelFiledLabel () {
        return this.globalCarModal().find('.form-group label').contains('Model');
    }

    selectModelDropwown () {
        return this.globalCarModal().find('select#addCarModel');
    }

    mileageFiledLabel () {
        return this.globalCarModal().find('.form-group label').contains('Mileage');
    }

    mileageInput () {
        return this.globalCarModal().find('input#addCarMileage');
    }

    milageUnit () {
        return this.globalCarModal().find('.input-group-text').contains('km')
    }

    carCancelButton () {
        return this.globalCarModal().find('button').contains('Cancel');
    }

    carAddButton () {
        return this.globalCarModal().find('button').contains('Add');
    }

    addCarCloseModalButton () {
        return this.globalCarModal().find('.close');
    }

    carList () {
        return this.garageMainPage().find('ul.car-list')
    }

    carItem () {
        return this.garageMainPage().find('li.car-item').find('app-car').find('.car.jumbotron');
    }

    carItemHeader () {
        return this.carItem().find('.car-heading');
    }

    carBase () {
        return this.carItemHeader().find('div.car_base');
    }

    carLogo () {
        return this.carBase().find('.car-logo_img');
    }
    
    carName () {
        return this.carBase().find('.car-group').find('p.car_name.h2');  
    }

    carActions () {
        return this.carItemHeader().find('div.car_actions');
    }

    editCarButton () {
        return this.carActions().find('button.car_edit.btn.btn-edit');
    }

    addExpenseButton () {
        return this.carActions().find('button').contains('Add fuel expense')
    }

    carItemBody () {
        return this.carItem().find('.car-body');
    }

    carUpdateMileage () {
        return this.carItemBody().find('.car_update-mileage')
    }

    carUpdateMileageFormTachometerIcon () {
        return this.carItemBody().find('span.update-mileage-form_icon')
    }

    carUpdateMileageNumber () {
        return this.carItemBody().find('input[name=miles]')
    }

    carUpdateMileageButton () {
        return this.carItemBody().find('button').contains('Update')
    }

    editCarTitleModal () {
        return this.globalCarModal().find('.modal-title').contains('Edit a car');
    }

    createdAtDateFieldLabel () {
        return this.globalCarModal().find('.form-group label').contains('Created at date');
    }

    createdAtDateInput () {
        return this.globalCarModal().find('input#carCreationDate')
    }

    createdAtDatePickerButton () {
        return this.globalCarModal().find('button.btn.date-picker-toggle')
    }

    calendarIcon () {
        return this.globalCarModal().find('span.icon.icon-calendar')
    }

    datePicker () {
        return cy.get('ngb-datepicker');
    }

    carSaveButton () {
        return this.globalCarModal().find('button').contains('Save');
    }

    carRemoveButton () {
        return this.globalCarModal().find('button').contains('Remove car');
    }

    removeCarModal () {
        return cy.get('ngb-modal-window').find('div.modal-content');
    }

    removeCarTitleModal () {
        return this.globalCarModal().find('.modal-title').contains('Remove car');
    }

    removeCarTextBody () {
        return this.globalCarModal().find('div.modal-body');
    }

    removeCarButton () {
        return this.globalCarModal().find('button').contains('Remove');
    }

}

export const garagePage = new GaragePage();