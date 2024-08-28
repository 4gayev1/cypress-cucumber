import Elements from "./Elements";

function initElements(runningFeature) {
  const featureName = runningFeature.split(".")[0].toLowerCase();
  cy.task('readPomDirectory').then((files) => {
    files.forEach((file) => {
      if (file.split(".")[0].toLowerCase() === featureName) {
        cy.readFile(`cypress/e2e/features/POM/${file}`).then((content) => {
          Elements.addElements(content);
        });
      }
    });
  });
}

export default initElements;