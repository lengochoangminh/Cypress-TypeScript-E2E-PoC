import { step } from "allure-js-commons";

export class TableAndDataPage {
  get txtAgeFilter() {
    return cy.get("input[placeholder='Age']");
  }

  navigateTo() {
    step("Navigate to Tables > Smart Table", () => {
      cy.visit(Cypress.env("baseUrl") + "/pages/tables/smart-table");
    });
  }

  filterByAge(age: string) {
    step("Filter the user by Age", () => {
      this.txtAgeFilter.click();
      this.txtAgeFilter.clear();
      this.txtAgeFilter.type(age);
      cy.wait(1000);
    });
  }

  assertFilterByAge(age: string) {
    step(`Verify to filter the user by ${age}`, () => {
      cy.get("tbody tr td:nth-child(7)").each(($value) => {
        expect($value.text() == age);
      });
    });
  }
}

export const tableAndDataPage: TableAndDataPage = new TableAndDataPage();
