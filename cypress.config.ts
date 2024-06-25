import { defineConfig } from "cypress";
const { allureCypress } = require("allure-cypress/reporter");

export default defineConfig({
  e2e: {
    env: {
      baseUrl: "http://localhost:4200",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on, {
        resultsDir: "./allure-results",
      });

      return config;
    },
  },
});
