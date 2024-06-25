import { step } from "allure-js-commons";

export class HomePage {
  get lightBulbIcon() {
    return cy.get("div.icon.status-primary");
  }
  get lightBulbStatus() {
    return cy.get(
      ":nth-child(1) > ngx-status-card > nb-card > .details > .status"
    );
  }
  get ddbTheme() {
    return cy.get("ngx-header nb-select");
  }

  navigateTo() {
    step("Navigate to Home Page - IoT Dashboard", () => {
      cy.visit(Cypress.env("baseUrl"));
    });
  }

  toggleLightOFF() {
    step("Toggle the Light is OFF", () => {
      this.lightBulbStatus.then(($btn) => {
        if ($btn.text() === "ON") this.lightBulbIcon.click();
      });
    });
  }

  toggleLightON() {
    step("Toggle the Light is ON", () => {
      this.lightBulbStatus.then(($btn) => {
        if ($btn.text() === "OFF") this.lightBulbIcon.click();
      });
    });
  }

  validateLightStatus(status: string) {
    step("Validate the light status", () => {
      this.lightBulbStatus.should("have.text", status);
    });
  }

  selectTheme(color: string) {
    step("Select to change the website's theme", () => {
      this.ddbTheme.click();
      cy.get("nb-option-list nb-option").contains(color).click();
    });
  }

  validateTheme() {
    step("Validate the website's theme", () => {
      cy.get("nb-layout-header").should(
        "have.css",
        "background-color",
        "rgb(50, 50, 89)"
      );
    });
  }
}

export const homePage: HomePage = new HomePage();
