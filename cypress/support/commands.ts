import "@testing-library/cypress/add-commands";
import "cypress-file-upload";
import "cypress-wait-until";

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.intercept("GET","web/index.php/core/i18n/messages").as("int1");

  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  cy.wait("@int1");
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get("button").click();
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): void;
    }
  }
}
