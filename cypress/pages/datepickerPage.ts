import { step } from "allure-js-commons";

export class DatePickerPage {
  get txtCommonDatePicker() {
    return cy.get("input[placeholder='Form Picker']");
  }
  get calendarTodayCell() {
    return cy.get(".today.day-cell.ng-star-inserted");
  }

  navigateTo() {
    step("Navigate to Form > Date Picker ", () => {
      cy.visit(Cypress.env("baseUrl") + "/pages/forms/datepicker");
    });
  }

  selectToday() {
    step("Select Today as the input date", () => {
      this.txtCommonDatePicker.click();
      this.calendarTodayCell.click();
    });
  }

  validateDate(date: string) {
    step("Select Today as the input date", () => {
      expect(this.txtCommonDatePicker.should("have.value", date));
    });
  }
}

export const datePickerPage: DatePickerPage = new DatePickerPage();
