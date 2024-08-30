# Cypress-Cucumber Integrated Project

This repo provides a fully customizable Cypress-Cucumber project setup. You only need to write POM JSON files, feature files, and step definitions to create robust end-to-end tests.

## Features

- Easy setup of Cypress with Cucumber for BDD-style testing
- Automatic loading of Page Object Models (POM) from JSON files
- Case-insensitive matching between POM files and feature files
- Simplified step definitions with pre-configured imports

## Installation

Install the package globally using npm:

```bash
git clone https://github.com/4gayev1/cypress-cucumber.git
```

## Usage

### 1. Create POM JSON Files

Create JSON files for your Page Object Models in the `cypress/e2e/features/POM` directory. The filename should match your feature file name (case-insensitive).

Example `login.json`:

```json
{
  "usernameInput": "#username",
  "passwordInput": "#password",
  "loginButton": "#login-btn"
}
```

### 2. Write Feature Files

Create your Cucumber feature files in the `cypress/e2e/features` directory.

Example `Login.feature`:

```gherkin
Feature: User Login

Scenario: Successful login
  Given I am on the login page
  When I enter valid credentials
  And I click the login button
  Then I should be logged in successfully
```

### 3. Implement Step Definitions

Create step definition files in the `cypress/e2e/step_definitions` directory. Import the necessary dependencies as shown below:

```javascript
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Elements from "../plugins/Elements";

Given("I am on the login page", () => {
  cy.visit("/login");
});

When("I enter valid credentials", () => {
  cy.get(Elements.getElement("usernameInput")).type("validuser");
  cy.get(Elements.getElement("passwordInput")).type("validpassword");
});

When("I click the login button", () => {
  cy.get(Elements.getElement("loginButton")).click();
});

Then("I should be logged in successfully", () => {
  cy.url().should("include", "/dashboard");
});
```

### 4. Run Your Tests

This projects provides several run options to suit different testing needs and CI/CD integrations. These can be executed using npm scripts defined in your `package.json`.

#### Available Scripts

1. **Open Cypress Test Runner**
   ```
   npm run cypressCloud
   ```

2. **Run Tests Headlessly**
   ```
   npm run headlessRun
   ```

3. **Run Tests in Headed Mode**
   ```
   npm run headedRun
   ```

4. **Record Run in Cypress Dashboard**
   ```
   npm run record
   ```

5. **Run Specific Feature File**
   ```
   npm run specFeature --feature=your-feature-name
   ```

6. **Record Run of Specific Feature File**
   ```
   npm run recordSpecFeature --feature=your-feature-name
   ```

7. **Run Tests with Specific Tag**
   ```
   npm run specTag --tag=@your-tag
   ```

8. **Record Run of Tests with Specific Tag**
   ```
   npm run recordSpecTag --tag=@your-tag
   ```

#### Notes

- The `specFeature`, `recordSpecFeature`, `specTag`, and `recordSpecTag` scripts are designed to work on both Windows and Unix-like operating systems.
- When using tags, ensure your feature files include the appropriate tags (e.g., `@your-tag`) above the scenarios you want to run.
- For recording runs, make sure you have set up your project with Cypress Dashboard and have the correct record key.

#### Examples

Run a specific feature file:
```
npm run specFeature --feature=login
```

Run all tests tagged with @smoke:
```
npm run specTag --tag=@smoke
```

Record a run of all @regression tests:
```
npm run recordSpecTag --tag=@regression
```

These run functionalities provide flexibility in executing your tests, whether you're doing local development, debugging, or running tests in a CI/CD pipeline.

## Configuration

The project automatically loads POM files based on the feature file names. You just need to include these two lines in each of your step definition files:

```javascript
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Elements from "../plugins/Elements";
```

Ensure that your POM JSON files and feature files have matching names (case-insensitive).

## Best Practices

1. Keep your POM JSON files focused on element selectors.
2. Use descriptive names for your elements in the POM files.
3. Leverage the `Elements.getElement()` method in your step definitions for robust element selection.
4. Follow Cucumber best practices for writing clear and maintainable feature files.

## Troubleshooting

If you encounter issues with element selection, ensure that:
- Your POM JSON file name matches the feature file name (case-insensitive).
- The element keys in your POM JSON file match those used in your step definitions.
- Your selectors in the POM JSON file are correct and unique.

### Congratulations! You are now ready to write and run your first test.
