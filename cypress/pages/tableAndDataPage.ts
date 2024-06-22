export class TableAndDataPage {
  get txtAgeFilter() {
    return cy.get("input[placeholder='Age']");
  }

  navigateTo() {
    cy.visit(Cypress.env("baseUrl") + "/pages/tables/smart-table");
  }

  filterByAge(age: string) {
    this.txtAgeFilter.click();
    this.txtAgeFilter.clear();
    this.txtAgeFilter.type(age);
    cy.wait(1000);
  }

  assertFilterByAge(age: string) {
    cy.get("tbody tr td:nth-child(7)").each(($value) => {
      expect($value.text() == age);
    });
  }
}

export const tableAndDataPage: TableAndDataPage = new TableAndDataPage();
