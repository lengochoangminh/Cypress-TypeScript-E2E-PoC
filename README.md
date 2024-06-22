# Cypress PoC - E2E test with IoT Dashboard

## Setup

- Clone the repo & Install dependencies: `npm install --force`
- Run the front-end web "IoT Dashboard": `npm start `
- Open the site at http://localhost:4200/
  <img width="800" alt="Screenshot 2024-06-01 at 09 29 15" src="https://github.com/lengochoangminh/Playwright-TypeScript-E2E-PoC/assets/29770042/17230070-f498-4dd3-9e87-a197ead769ce">

## Execute Tests

- Run all tests under e2e folder: `npx cypress run`
- Run the tests by the specified tags: `npx cypress run --spec cypress/e2e/iotDashboard.cy.ts`