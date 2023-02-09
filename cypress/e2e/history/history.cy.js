/// <reference types="cypress"/>

describe("Historia de consultas", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.login(Cypress.env("username"), Cypress.env("password"));
      cy.agendamento();
    });
  
    it("Deve mostrar consultas marcadas na página History", () => {
      cy.get('#menu-toggle').click();
      cy.contains('a', 'History').click();
      cy.contains('p','Seoul CURA Healthcare Center').should('be.visible');
    });

    it('Deve retornar a página inicial quando clicar em "Go to Homepage"', () => {
      cy.get('#menu-toggle').click();
      cy.contains('a', 'History').click();
      cy.contains('a', 'Go to Homepage').click();
      cy.contains('h1', 'CURA Healthcare Service').should("be.visible");
    })
  
  });