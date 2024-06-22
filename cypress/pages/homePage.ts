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
    cy.visit(Cypress.env("baseUrl"));
  }

  toggleLightOFF() {
    this.lightBulbStatus.then(($btn) => {
      if ($btn.text() === "ON") this.lightBulbIcon.click();
    });
  }

  toggleLightON() {
    this.lightBulbStatus.then(($btn) => {
      if ($btn.text() === "OFF") this.lightBulbIcon.click();
    });
  }

  validateLightStatus(status: string) {
    this.lightBulbStatus.should("have.text", status);
  }

  selectTheme(color: string) {
    this.ddbTheme.click();
    cy.get("nb-option-list nb-option").contains(color).click();
  }

  validateTheme() {
    cy.get("nb-layout-header").should(
      "have.css",
      "background-color",
      "rgb(50, 50, 89)"
    );
  }
}

export const homePage: HomePage = new HomePage();
