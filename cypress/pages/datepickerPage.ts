export class DatePickerPage {
  get txtCommonDatePicker() {
    return cy.get("input[placeholder='Form Picker']");
  }
  get calendarDayCell() {
    return cy.get(".day-cell.ng-star-inserted").find(".cell-content");
  }

  navigateTo() {
    cy.visit(Cypress.env("baseUrl") + "/pages/forms/datepicker");
  }

  inputCommonDatePicker(date: Date) {
    const expectedDate = date.getDate().toString();
    const expectedMonthShot = date.toLocaleString("En-US", { month: "short" });
    // const expectedMonthLong = date.toLocaleString("En-US", { month: "long" });
    const expectedYear = date.getFullYear();
    const dateToAssert = `${expectedMonthShot} ${expectedDate}, ${expectedYear}`;
    // const expectedMonthAndYear = ` ${expectedMonthLong} ${expectedYear}`;

    this.txtCommonDatePicker.click();
    let count = 0;
    this.calendarDayCell.each(($e1, index) => {
      const text = $e1.text();
      if (text.match(expectedDate)) {
        if (count == 1) this.calendarDayCell.eq(index).click();
        else {
          count++;
        }
      }
    });

    expect(this.txtCommonDatePicker.should("have.value", dateToAssert));
  }
}

export const datePickerPage: DatePickerPage = new DatePickerPage();
