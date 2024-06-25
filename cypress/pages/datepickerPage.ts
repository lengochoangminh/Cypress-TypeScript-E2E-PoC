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
      const date = new Date();
      const expectedDate = date.getDate().toString();
      const expectedMonthShot = date.toLocaleString("En-US", {
        month: "short",
      });
      const expectedYear = date.getFullYear();
      const dateToAssert = `${expectedMonthShot} ${expectedDate}, ${expectedYear}`;

      this.txtCommonDatePicker.click();
      this.calendarTodayCell.click();

      expect(this.txtCommonDatePicker.should("have.value", dateToAssert));
    });
  }
}

export const datePickerPage: DatePickerPage = new DatePickerPage();
