const {Given,
  When,
  Then
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  getElement
} = require("../plugins/Elements");

When("User is on {string} page", (url) => {
  cy.visit(url);
});

When("User goes {string} page", (direction) => {
  switch (direction) {
    case "previous":
      cy.go("back");
    case "next":
      cy.go("forward");
  }
});

When("User reload the page", () => {
  cy.reload();
});

When("User hard reload the page", () => {
  cy.reload(true);
});

When("User waits {int} seconds", (duration) => {
  cy.wait(duration * 1000);
});

When("User types {string} in {string}", (text, element) => {
  text !== "" ? getElement(element).type(`${text}`) : " ";
});

When("User {string} {string}", (option, element) => {
  switch (option) {
    case "clicks":
      getElement(element).click({
        force: true
      });
      break;
    case "double clicks":
      getElement(element).dblclick({
        force: true
      });
      break;
    case "right clicks":
      getElement(element).rightclick({
        force: true
      });
      break;
    case "left clicks":
      getElement(element).leftclick({
        force: true
      });
      break;
    case "checks":
      getElement(element).check({
        force: true
      });
      break;
    case "unchecks":
      getElement(element).uncheck({
        force: true
      });
      break;
    case "focus":
      getElement(element).focus({
        force: true
      });
      break;
    case "blur":
      getElement(element).blur({
        force: true
      });
    case "hovers":
      getElement(element).trigger("mouseover")
      break;
    case "drags":
      getElement(element).trigger("dragstart")
      break;
    case "drops":
      getElement(element).trigger("drop")
      break;
    default:
      throw new Error(`Option "${option}" is not supported`);
  }
});

When("User selects {string} from {string}", (option, element) => {
  getElement(element).select(option);
});

When("User scrolls {string} to {string}", (position, element) => {
  switch (position) {
    case "top":
      getElement(element).scrollTo(position, {
        ensureScrollable: true
      });
      break;
    case "topRight":
      getElement(element).scrollTo(position, {
        ensureScrollable: true
      });
      break;
    case "left":
      getElement(element).scrollTo(position, {
        ensureScrollable: true
      });
      break;
    case "center":
      getElement(element).scrollTo(position, {
        ensureScrollable: true
      });
      break;
    case "right":
      getElement(element).scrollTo(position, {
        ensureScrollable: true
      });
      break;
    case "bottomLeft":
      getElement(element).scrollTo(position, {
        ensureScrollable: true
      });
      break;
    case "bottom":
      getElement(element).scrollTo(position, {
        ensureScrollable: true
      });
      break;
    case "bottomRight":
      getElement(element).scrollTo(position, {
        ensureScrollable: true
      });
      break;
    case "topLeft":
      getElement(element).scrollTo(position, {
        ensureScrollable: true
      });
      break;
    default:
      throw new Error(`Position "${position}" is not supported`);
  }
});

When("User scrolls {string} to {string} in {int} seconds", (position, element, duration) => {
  switch (position) {
    case "top":
      getElement(element).scrollTo(position, {
        ensureScrollable: true,
        duration: duration * 1000
      });
      break;
    case "topRight":
      getElement(element).scrollTo(position, {
        ensureScrollable: true,
        duration: duration * 1000
      });
      break;
    case "left":
      getElement(element).scrollTo(position, {
        ensureScrollable: true,
        duration: duration * 1000
      });
      break;
    case "center":
      getElement(element).scrollTo(position, {
        ensureScrollable: true,
        duration: duration * 1000
      });
      break;
    case "right":
      getElement(element).scrollTo(position, {
        ensureScrollable: true,
        duration: duration * 1000
      });
      break;
    case "bottomLeft":
      getElement(element).scrollTo(position, {
        ensureScrollable: true,
        duration: duration * 1000
      });
      break;
    case "bottom":
      getElement(element).scrollTo(position, {
        ensureScrollable: true,
        duration: duration * 1000
      });
      break;
    case "bottomRight":
      getElement(element).scrollTo(position, {
        ensureScrollable: true,
        duration: duration * 1000
      });
      break;
    case "topLeft":
      getElement(element).scrollTo(position, {
        ensureScrollable: true,
        duration: duration * 1000
      });
      break;
    default:
      throw new Error(`Position "${position}" is not supported`);
  }
});

When("User scrolls page to {string}", (position) => {
  switch (position) {
    case "top":
      cy.scrollTo(position, {
        ensureScrollable: true
      });
      break;
    case "topRight":
      cy.scrollTo(position, {
        ensureScrollable: true
      });
      break;
    case "left":
      cy.scrollTo(position, {
        ensureScrollable: true
      });
      break;
    case "center":
      cy.scrollTo(position, {
        ensureScrollable: true
      });
      break;
    case "right":
      cy.scrollTo(position, {
        ensureScrollable: true
      });
      break;
    case "bottomLeft":
      cy.scrollTo(position, {
        ensureScrollable: true
      });
      break;
    case "bottom":
      cy.scrollTo(position, {
        ensureScrollable: true
      });
      break;
    case "bottomRight":
      cy.scrollTo(position, {
        ensureScrollable: true
      });
      break;
    case "topLeft":
      cy.scrollTo(position, {
        ensureScrollable: true
      });
      break;
    default:
      throw new Error(`Position "${position}" is not supported`);
  }
});

When("User scrolls page to {string} in {int} seconds", (position, duration) => {
  switch (position) {
    case "top":
      cy.scrollTo(position, {
        ensureScrollable: true,
        duration: duration * 1000
      });
      break;
    case "topRight":
      cy.scrollTo(position, {
        ensureScrollable: true,
        duration: duration * 1000
      });
      break;
    case "left":
      cy.scrollTo(position, {
        ensureScrollable: true,
        duration: duration * 1000
      });
      break;
    case "center":
      cy.scrollTo(position, {
        ensureScrollable: true,
        duration: duration * 1000
      });
      break;
    case "right":
      cy.scrollTo(position, {
        ensureScrollable: true,
        duration: duration * 1000
      });
      break;
    case "bottomLeft":
      cy.scrollTo(position, {
        ensureScrollable: true,
        duration: duration * 1000
      });
      break;
    case "bottom":
      cy.scrollTo(position, {
        ensureScrollable: true,
        duration: duration * 1000
      });
      break;
    case "bottomRight":
      cy.scrollTo(position, {
        ensureScrollable: true,
        duration: duration * 1000
      });
      break;
    case "topLeft":
      cy.scrollTo(position, {
        ensureScrollable: true,
        duration: duration * 1000
      });
      break;
    default:
      throw new Error(`Position "${position}" is not supported`);
  }
});

When("User scrolls {string} from {string} to {string}", (element, from, to) => {
  getElement(element).scrollTo(from, to, {
    ensureScrollable: true
  });
});

When("User scrolls page from {string} to {string}", (from, to) => {
  cy.scrollTo(from, to, {
    ensureScrollable: true
  });
});

When("User scrolls {string} into view", (element) => {
  getElement(element).scrollIntoView();
});

When("User scrolls {string} into view in {int} seconds", (element, duration) => {
  getElement(element).scrollIntoView({
    duration: duration * 1000
  });
});

Then("{string} should be {string}", (element, option) => {
  switch (option) {
    case "checked":
      cy.get(element).should("be.checked");
      break;
    case "unchecked":
      getElement(element).should("not.be.checked");
      break;
    case "disabled":
      getElement(element).should("be.disabled");
      break;
    case "enabled":
      getElement(element).should("be.enabled");
      break;
    case "visible":
      getElement(element).should("be.visible");
      break;
    case "unvisible":
      getElement(element).should("not.be.visible");
      break;
    case "focused":
      getElement(element).should("be.focused");
      break;
    case "unfocused":
      getElement(element).should("not.be.focused");
      break;
    case "selected":
      getElement(element).should("be.selected");
      break;
    case "unselected":
      getElement(element).should("not.be.selected");
      break;
    default:
      throw new Error(`Option "${option}" is not supported`);
  }
});

Then("{string} should have {string} {string}", (element, expectedValue, option) => {
  switch (option) {
    case "text":
      getElement(element).should('have.text', expectedValue);
      break;
    case "class":
      getElement(element).should('have.class', expectedValue);
      break;
    case "id":
      getElement(element).should('have.id', expectedValue);
      break;
    case "value":
      getElement(element).should('have.value', expectedValue);
      break;
    case "key":
      getElement(element).should('have.keys', expectedValue);
      break;
    default:
      throw new Error(`Option "${option}" is not supported`);
  }
});


Then("{string} of {string} {string} should have {string}", (element, target, option, value) => {
  switch (option) {
    case "attribute":
      getElement(element).should("have.attr", target, value);
      break;
    case "css":
      getElement(element).should("have.css", target, value);
      break;
    default:
      throw new Error(`Option "${option}" is not supported`);
  }
});


Then("{string} should not have {string} {string}", (element, expectedValue, option) => {
  switch (option) {
    case "text":
      getElement(element).should('not.have.text', expectedValue);
      break;
    case "class":
      getElement(element).should('not.have.class', expectedValue);
      break;
    case "id":
      getElement(element).should('not.have.id', expectedValue);
      break;
    case "value":
      getElement(element).should('not.have.value', expectedValue);
      break;
    case "key":
      getElement(element).should('not.have.keys', expectedValue);
      break;
    default:
      throw new Error(`Option "${option}" is not supported`);
  }
});


Then("{string} of {string} {string} should not have {string}", (element, target, option, value) => {
  switch (option) {
    case "attribute":
      getElement(element).should("not.have.attr", target, value);
      break;
    case "css":
      getElement(element).should("not.have.css", target, value);
      break;
    default:
      throw new Error(`Option "${option}" is not supported`);
  }
});