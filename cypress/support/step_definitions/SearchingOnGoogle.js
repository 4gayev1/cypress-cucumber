import { Given,When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Elements from "../plugins/Elements";

Given("User is on {string} webpage", (url) => {
  cy.visit(`${url}`);
});

When("Type {string} in {string}", (text, element) => {
      text !== "" ? cy.get(Elements.getElement(element)).type(`${text}`) : " ";
});

Then("Click {string}", (element) => {
  cy.get(Elements.getElement(element)).click({ force: true });
});

Then("{string} should have {string} text", (element, text) => {
  cy.get(Elements.getElement(element)).should("have.text", text);
});