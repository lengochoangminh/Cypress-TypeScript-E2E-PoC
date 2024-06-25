import { datePickerPage } from "../pages/datepickerPage";

describe("Forms - Datepicker", () => {
  it("Verify to select the date from the Common Datepicker", () => {
    datePickerPage.navigateTo();
    datePickerPage.inputCommonDatePicker();
  });
});
