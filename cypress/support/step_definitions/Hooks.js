const { Before } = require("@badeball/cypress-cucumber-preprocessor");
const initElements = require("../plugins/InitElements");

Before(() => {
  initElements(Cypress.spec.name);
});


