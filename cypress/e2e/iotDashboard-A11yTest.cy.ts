import { homePage } from "../pages/homePage";
import { step } from "allure-js-commons";
import { a11yStandardsConfig } from "../support/a11y.config";

describe.skip("Accessibilty Test", () => {
  it("A11y test on IoT Dashboard", () => {
    homePage.navigateTo();
    step("A11y test on IoT Dashboard", () => {
      cy.injectAxe();
      cy.configureAxe(a11yStandardsConfig);
      cy.checkA11y();
    });
  });
});
