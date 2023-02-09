/// <reference types="cypress"/>

describe("Marcar consulta", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login(Cypress.env("username"), Cypress.env("password"));
  });

  it("Deve ser redirecionado para página de sucesso, após preencher todos os dados válidos", () => {
    cy.agendamento();
    cy.contains('h2', 'Appointment Confirmation').should('be.visible');
  });

  
});
