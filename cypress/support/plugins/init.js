import Elements from "./Elements";

function init(runningFeature) {
  const featureName = runningFeature.split(".")[0].toLowerCase();
  cy.task("readDirectory", "cypress/e2e/features/POM").then((files) => {
    files.forEach((file) => {
      const POMfileName = file.split(".")[0].toLowerCase();
      if (POMfileName === featureName) {
        cy.readFile(`cypress/e2e/features/POM/${file}`).then((content) => {
          Elements.addElements(content);
        });
      }
    });
  });
}

export default init;
