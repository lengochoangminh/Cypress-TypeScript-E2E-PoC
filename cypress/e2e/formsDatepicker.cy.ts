import { datePickerPage } from "../pages/datepickerPage";

describe("Forms - Datepicker", () => {
  it("Verify to select the date from the Common Datepicker", () => {
    const date = new Date();
    date.setDate(date.getDate() + 7);

    datePickerPage.navigateTo();
    datePickerPage.inputCommonDatePicker(date);
  });
});
