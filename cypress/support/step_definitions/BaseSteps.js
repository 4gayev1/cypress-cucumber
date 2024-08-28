import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Elements from "../plugins/Elements";
import moment from "moment";

Given("User is in {string} webpage", (url) => {
  cy.visit(`${url}`);
});

When("Fills {string} field with {string}", (key, text) => {
  switch (text) {
    case "Yesterday":
      text !== ""
        ? cy
            .get(Elements.getElement(key))
            .type(`${moment().format("DD-MM-YYYY")}`)
        : " ";
      break;
    case "Now":
      text !== ""
        ? cy
            .get(Elements.getElement(key))
            .type(`${moment().add(1, "days").format("DD-MM-YYYY")}`)
        : " ";
      break;
    case "Tomorrow":
      text !== ""
        ? cy
            .get(Elements.getElement(key))
            .type(`${moment().add(-1, "days").format("DD-MM-YYYY")}`)
        : " ";
      break;
    default:
      // console.log(Elements.getElement(key))
      text !== "" ? cy.get(Elements.getElement(key)).type(`${text}`) : " ";
  }
});

When("Clicks {string} element", (key) => {
  cy.get(Elements.getElement(key)).click({ force: true });
});

Then("User should be navigated to {string}", (key) => {
  cy.url().should("include", key);
});

Then("{string} should have text {string}", (key, text) => {
  cy.get(Elements.getElement(key)).should("have.text", text);
});

Then("{string} message should be displayed inside {string}", (error, key) => {
  cy.get(Elements.getElement(key)).should("have.text", `${error}`);
});

When("Wait {int} milliseconds", (second) => {
  cy.wait(second);
});

When("Clicks {string} inside list which has the {string} text", (key, text) => {
  cy.get(Elements.getElement(key)).then((elements) => {
    const elementsArray = Array.from(elements);
    elementsArray.forEach((element) => {
      if (element.outerText.trim() === text) {
        element.click();
      }
    });
  });
});

Then("{string} should be exist", (key, deg) => {
  cy.get(Elements.getElement(key)).should("exist");
});



Then("User should be navigated to homepage {string}", (key) => {
  cy.get(Elements.getElement(key)).should("not.be.empty");
});

When("Clear {string} field", (key) => {
  let locator = Elements.getElement("formInputs");
  locator = locator.replace("input", key);
  cy.get(locator).clear({ force: true });
});

When("Fills input fields with new data from dataTable", (dataTable) => {
  dataTable.hashes().forEach((hash) => {
    let locator = Elements.getElement("formInputs");
    locator = locator.replace("input", `${hash.input}`);
    cy.get(locator).clear(`${hash.newData}`);
    cy.get(locator).type(`${hash.newData}`);
  });
});

When("Clicks {string} checkbox", (gender) => {
  if (gender == "man")
    cy.get(Elements.getElement("genderCheckBox")).eq(0).click({ force: true });
  else {
    cy.get(Elements.getElement("genderCheckBox")).eq(1).click({ force: true });
  }
});

When("Verify {string} checkbox is checked", (gender) => {
  if (gender == "man")
    cy.get(Elements.getElement("genderCheckBox")).eq(0).should("be.checked");
  else {
    cy.get(Elements.getElement("genderCheckBox")).eq(1).should("be.checked");
  }
});
When("Select {string} from {string} dropdown", (text, key) => {
  cy.get(Elements.getElement(key)).click();
  cy.contains(text).click({ force: true });
});

Then("Verify {string} option is selected inside {string}", (option, key) => {
  cy.get(Elements.getElement(key)).should("have.text", option);
});
Then("Changes shouldn't be saved", () => {
  cy.wait(500);
  cy.get(Elements.getElement("settingsSaveBtn")).should(
    "have.attr",
    "class",
    "save disabled",
  );
  cy.get(Elements.getElement("settingsSaveBtn")).should("be.visible");
});

Then("Changes should be saved", (dataTable) => {
  dataTable.hashes().forEach((hash) => {
    let locator = Elements.getElement("formInputs");
    locator = locator.replace("input", `${hash.input}`);
    cy.get(locator).should("have.value", `${hash.newData}`);
  });
});


Then("{string} should be turned {string} deg", (key, deg) => {
  cy.get(Elements.getElement(key))
    .invoke("attr", "style")
    .should("contain", `transform: rotate(${deg}deg)`);
});

Then("Push {string} in {string}", (key, text) => {
  cy.get(Elements.getElement(text)).trigger("keyup", {
    keyCode: parseInt(key),
  });
});
Then("Data should match the given {string}", function (key, dataTable) {
  cy.get(Elements.getElement(key))
    .first()
    .find("td")
    .then((cells) => {
      const cellsArray = Array.from(cells);
      const DataTable = [];
      dataTable.rawTable.map((data) => {
        DataTable.push(data[0]);
      });
      let i = 3;
      while (i <= cellsArray.length - 1) {
        cy.wrap(cellsArray[i]).contains(`${DataTable[i]}`);
        i++;
      }
    });
});

Then(
  "Data should match the given {string} of {string}",
  function (index, key, dataTable) {
    cy.get(Elements.getElement(key))
      .first()
      .find("td")
      .then((cells) => {
        const cellsArray = Array.from(cells);
        cy.wrap(cellsArray[index]).contains(`${dataTable.rawTable[0][0]}`);
      });
  },
);

Then(
  "{string} should be closed and have {string} className",
  (key, className) => {
    cy.get(Elements.getElement(key)).should("have.class", className);
  },
);

Then(
  "Username and password input error should be displayed inside {string}",
  (key, datatable) => {
    datatable.hashes().forEach((error) => {
      cy.get(Elements.getElement(key))
        .eq(0)
        .should("have.text", `${error.usernameError}`);
      cy.get(Elements.getElement(key))
        .eq(1)
        .should("have.text", `${error.passwordError}`);
    });
  },
);
