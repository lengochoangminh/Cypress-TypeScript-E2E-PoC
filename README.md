# Cypress PoC - E2E test with IoT Dashboard

## Setup

- Clone the repo & Install dependencies: `npm install --force`
- Run the front-end web "IoT Dashboard": `npm start `
- Open the site at http://localhost:4200/
  <img width="800" alt="Screenshot 2024-06-01 at 09 29 15" src="https://github.com/lengochoangminh/Playwright-TypeScript-E2E-PoC/assets/29770042/17230070-f498-4dd3-9e87-a197ead769ce">

## Execute Tests

- Run all tests under e2e folder: `npx cypress run`
- Run the tests by the specified tags: `npx cypress run --spec cypress/e2e/iotDashboard.cy.ts`

## Feature Keywords

- Implemented the tests in the Page Object Model design pattern

- Installed Prettier and ESLint to help solve common errors and consistency your code base
  <img width="700" alt="image" src="https://github.com/lengochoangminh/Cypress-TypeScript-PoC/assets/29770042/d21a12d6-942f-4ccd-8562-cfa8b98dd022">
  <img width="900" alt="image" src="https://github.com/lengochoangminh/Cypress-TypeScript-PoC/assets/29770042/2bda1dcd-dc20-4be5-87c9-375f543cca72">

- Allure Report
  <img width="900" alt="image" src="https://github.com/lengochoangminh/Cypress-TypeScript-PoC/assets/29770042/f7433095-9fc4-4bed-aa50-4d4c23f57ac3">
