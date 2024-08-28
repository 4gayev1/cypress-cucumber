const { Before } = require("@badeball/cypress-cucumber-preprocessor");
const init = require("../plugins/init");

Before(() => {
  init(Cypress.spec.name);
});
