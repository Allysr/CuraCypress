/// <reference types="cypress"/>

describe("Página de login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve ser redirecionado para a página 'Make Appointment', ao inserir dados válidos", () => {
    cy.login(Cypress.env("username"), Cypress.env("password"));
    cy.contains("h2", "Make Appointment").should("be.visible");
  });

  it("Deve sair do site quando clicar em 'Logout' e redirecionar para a página de entrada do site", () => {
    cy.login(Cypress.env("username"), Cypress.env("password"));
    cy.get('#menu-toggle').click();
    cy.contains('a', 'Logout').click();
    cy.contains('h1', 'CURA Healthcare Service').should("be.visible");
  });
});
