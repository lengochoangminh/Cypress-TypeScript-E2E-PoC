import { homePage } from "../pages/homePage";
import { step } from "allure-js-commons";

describe("Visual test for Home - IoT Dashboard", () => {
  beforeEach("Navigate to the home page - IoT Dashboard", () => {
    homePage.navigateTo();
  });

  it("Visual test for the full page - IoT Dashboard", () => {
    step("Visual test for the full page - IoT Dashboard", () => {
      cy.compareSnapshot("IoT Dashboard", {
        capture: "fullPage",
        errorThreshold: 0.0,
      });
    });
  });

  it("Visual test for the specifiec element in IoT Dashboard", () => {
    step("Visual test for the light buld icon", () => {
      cy.get("div.icon.status-warning").compareSnapshot(
        "Coffee Maker Icon",
        0.2
      );
    });
  });
});
