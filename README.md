# Cypress PoC - E2E test with IoT Dashboard

## Setup

- Clone the repo & Install dependencies: `npm install --force`
- Run the front-end web "IoT Dashboard": `npm start `
- Open the site at http://localhost:4200/
  <img width="800" alt="Screenshot 2024-06-01 at 09 29 15" src="https://github.com/lengochoangminh/Playwright-TypeScript-E2E-PoC/assets/29770042/17230070-f498-4dd3-9e87-a197ead769ce">

## Execute Tests

- Run all tests under e2e folder: `npm run cy:run`
- Generate the Allure report: `npm run allure:report`

## Feature Keywords

- Implemented the tests in the Page Object Model design pattern

- Installed Prettier and ESLint to help solve common errors and consistency your code base
  <img width="700" alt="image" src="https://github.com/lengochoangminh/Cypress-TypeScript-PoC/assets/29770042/d21a12d6-942f-4ccd-8562-cfa8b98dd022">
  <img width="900" alt="image" src="https://github.com/lengochoangminh/Cypress-TypeScript-PoC/assets/29770042/2bda1dcd-dc20-4be5-87c9-375f543cca72">

- Integrated to Allure Report
  <img width="700" alt="image" src="https://github.com/lengochoangminh/Cypress-TypeScript-PoC/assets/29770042/f7433095-9fc4-4bed-aa50-4d4c23f57ac3">

- Accessibility Test with Cypress AXE
  <img width="900" alt="Screenshot 2024-06-25 at 20 44 40" src="https://github.com/lengochoangminh/Cypress-TypeScript-PoC/assets/29770042/1c80c46d-6a41-4330-988a-c09339f48842">

- Cypress Visual Regression. Highlighted the different GUI compared between the Base & Actual images
  <img width="900" alt="image" src="https://github.com/lengochoangminh/Cypress-TypeScript-PoC/assets/29770042/cf779f5a-75e1-47f2-b2f1-9f1273896f16">

- CI/CD with GitHub Actions
  <img width="900" alt="image" src="https://github.com/lengochoangminh/Cypress-TypeScript-E2E-PoC/assets/29770042/676f2bc1-d229-4178-a006-d7b22814d525">

