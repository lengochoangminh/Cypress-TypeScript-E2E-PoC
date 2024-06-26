import { datePickerPage } from "../pages/datepickerPage";

describe("Forms - Datepicker", () => {
  it("Verify to select the date from the Common Datepicker", () => {
    const date = new Date();
    const expectedDate = date.getDate().toString();
    const expectedMonthShot = date.toLocaleString("En-US", {
      month: "short",
    });
    const expectedYear = date.getFullYear();
    const dateToAssert = `${expectedMonthShot} ${expectedDate}, ${expectedYear}`;

    datePickerPage.navigateTo();
    datePickerPage.selectToday();
    datePickerPage.validateDate(dateToAssert);
  });
});
