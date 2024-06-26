import { defineConfig } from "cypress";
const { allureCypress } = require("allure-cypress/reporter");
const { configureVisualRegression } = require("cypress-visual-regression");

export default defineConfig({
  e2e: {
    env: {
      baseUrl: "http://localhost:4200",
      visualRegressionType: "regression",
      visualRegressionBaseDirectory: "cypress/snapshots/base",
      visualRegressionDiffDirectory: "cypress/snapshots/diff",
      visualRegressionGenerateDiff: "always",
      visualRegressionFailSilently: true,
    },
    screenshotsFolder: "./cypress/snapshots/actual",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configureVisualRegression(on);
      allureCypress(on, {
        resultsDir: "./allure-results",
      });

      return config;
    },
  },
});
