// const cucumber = require('cypress-cucumber-preprocessor/steps');
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // on('file:preprocessor', cucumber())

      // implement node event listeners here
    },
    // specPattern: "cypress/e2e/step_definitions/*.feature"
  },
});
