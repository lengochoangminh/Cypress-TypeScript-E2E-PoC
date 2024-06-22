import { tableAndDataPage } from "../pages/tableAndDataPage";

describe("Tables and Data - Smart Table", () => {
  beforeEach(() => {
    tableAndDataPage.navigateTo();
  });

  it("Verify the filter the users by years old", () => {
    const ages = ["20", "40"];
    for (const age of ages) {
      tableAndDataPage.filterByAge(age);
      tableAndDataPage.assertFilterByAge(age);
    }
  });
});
