const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const fs = require("fs");
const path = require("path");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  on("task", {
    readDirectory(directoryPath) {
      return fs.readdirSync(path.join(__dirname, directoryPath));
    },
  });

  return config;
}

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    supportFile: false,
    excludeSpecPattern: "*.js",
    ignoreUncaughtExceptions: true,
    ignoreSSLErrors: true,
    projectId: "231i8m",
    pageLoadTimeout: 1200000,
    env: {
      base_url: "yourURL.com",
    },
    setupNodeEvents,
    specPattern: "./cypress/e2e/features/*.feature",
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
