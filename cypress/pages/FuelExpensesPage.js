
import { basePage } from "./BasePage";

export class FuelExpensePage {

    fuelExpensesButton () {
        return basePage.header().find('a.btn.header-link').contains('Fuel expenses').should('have.attr', 'href', '/panel/expenses')
    }

    fuelExpensesMainPage () {
        return cy.get('app-fuel-expenses');
    }

    fuelExpensesTitle () {
        return this.fuelExpensesMainPage().find('div.panel-page_heading').contains('Fuel expenses');
    }

    addExpenseButton () {
        return this.fuelExpensesMainPage().find('button').contains('Add an expense');
    }

    emptyFuelExpensesText () {
        return this.fuelExpensesMainPage().find('p.h3.panel-empty_message').contains('You don’t have any cars in')
    }

    emptyFuelExpensesTextLink () {
        return this.emptyFuelExpensesText().find('a').should('have.attr', 'href', '/panel/garage')
    }

    emptyFuelExpensesSvg () {
        return this.fuelExpensesMainPage().find('svg');
    }

    carSelectorDropdown () {
        return cy.get('app-car-select-dropdown');
    }

    carSelectDropdown () {
        return this.carSelectorDropdown().find('button#carSelectDropdown');
    }

    carSelectDropdownMenu () {
        return this.carSelectorDropdown().find('ul.car-select-dropdown_menu.dropdown-menu');
    }

    absentFuelExpensesSvg () {
        return this.fuelExpensesMainPage().find('svg');
    }

    absentFuelExpensesText () {
        return this.fuelExpensesMainPage().find('p.h3.panel-empty_message').contains('You don’t have any fuel expenses filed in')
    }

    globalExpensesModal () {
        return cy.get('ngb-modal-window').find('div.modal-content');
    }

    addExpenseTitleModal () {
        return this.globalExpensesModal().find('h4.modal-title').contains('Add an expense');
    }

    vehicleFieldLabel () {
        return this.globalExpensesModal().find('.form-group label').contains('Vehicle');
    }

    selectVehicleDropwown () {
        return this.globalExpensesModal().find('select#addExpenseCar');
    }

    reportDateFieldLabel () {
        return this.globalExpensesModal().find('.form-group label').contains('Report date');
    }

    reportDateDateInput () {
        return this.globalExpensesModal().find('input#addExpenseDate')
    }

    reportDateDatePickerButton () {
        return this.globalExpensesModal().find('button.btn.date-picker-toggle')
    }

    calendarIcon () {
        return this.globalExpensesModal().find('span.icon.icon-calendar')
    }

    datePicker () {
        return cy.get('ngb-datepicker');
    }

    mileageFiledLabel () {
        return this.globalExpensesModal().find('.form-group label').contains('Mileage');
    }

    mileageInput () {
        return this.globalExpensesModal().find('input#addExpenseMileage');
    }

    milageUnit () {
        return this.globalExpensesModal().find('.input-group-text').contains('km')
    }

    numberOfLitersFiledLabel () {
        return this.globalExpensesModal().find('.form-group label').contains('Number of liters');
    }

    numberOfLitersInput () {
        return this.globalExpensesModal().find('input#addExpenseLiters');
    }

    numberOfLitersUnit () {
        return this.globalExpensesModal().find('.input-group-text').contains('L')
    }

    totalCostFiledLabel () {
        return this.globalExpensesModal().find('.form-group label').contains('Total cost');
    }

    totalCostInput () {
        return this.globalExpensesModal().find('input#addExpenseTotalCost');
    }

    totalCostUnit () {
        return this.globalExpensesModal().find('.input-group-text').contains('$')
    }

    expenseCancelButton () {
        return this.globalExpensesModal().find('button.btn.btn-secondary').contains('Cancel');
    }

    expenseAddButton () {
        return this.globalExpensesModal().find('button.btn.btn-primary').contains('Add');
    }

    addExpenseCloseModalButton () {
        return this.globalExpensesModal().find('button.close');
    }

    fuelExpensesTable () {
        return this.fuelExpensesMainPage().find('table.table.expenses_table');
    }

    fuelExpensesTableHeader () {
        return this.fuelExpensesTable().find('thead tr');
    }

    fuelExpensesTableExpenseHeaderRow (headerName) {
        return this.fuelExpensesTable().find('th').contains(headerName);
    }

    fuelExpensesTableBodyRow (index) {
        return this.fuelExpensesTable().find('tbody tr').eq(index);

    }

    fuelExpensesTableBodyRowCell (index,value,indexRow) {
        return this.fuelExpensesTableBodyRow(indexRow).find('td').eq(index).should('contain', value);
    }

    fuelExpensesTableBodyRowButtons (indexRow) {
        return this.fuelExpensesTableBodyRow(indexRow).find('td').eq(4);
    }

    fuelExpensesTableBodyRowEditButton (indexRow) {
        return this.fuelExpensesTableBodyRow(indexRow).find('td').eq(4).find('button.btn.btn-edit');
    }

    fuelExpensesTableBodyRowRemoveButton (indexRow) {
        return this.fuelExpensesTableBodyRow(indexRow).find('td').eq(4).find('button.btn.btn-delete');
    }

    editExpenseTitleModal () {
        return this.globalExpensesModal().find('h4.modal-title').contains('Edit an expense');
    }

    editExpenseSaveButton () {
        return this.globalExpensesModal().find('button.btn.btn-primary').contains('Save');
    }

    removeEntryTitleModal () {
        return this.globalExpensesModal().find('h4.modal-title').contains('Remove entry');
    }

    removeEntryText () {
        return this.globalExpensesModal().find('div.modal-body p').contains('Do you really wnat to remove fuel expense entry from 15.04.2024?');
    }

    removeEntryButton () {
        return this.globalExpensesModal().find('button.btn.btn-danger').contains('Remove');
    }
    
}

export const fuelExpensesPage = new FuelExpensePage();