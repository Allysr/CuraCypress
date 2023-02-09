Cypress.Commands.add("login", (nome, senha) => {
  cy.get("#btn-make-appointment").click();
  cy.get('input[name="username"]').type(nome);
  cy.get('input[name="password"]').type(senha, {
    log: false,
  });
  cy.get("#btn-login").click();
});

Cypress.Commands.add("agendamento", () => {
  cy.get("#combo_facility").select("Seoul CURA Healthcare Center");
  cy.get("#radio_program_medicare").check();
  cy.get("#txt_visit_date").type("11-10-1998");
  cy.get("body").click();
  cy.get("#txt_comment").type("Estou dodoi, socorroooo doutor");
  cy.get("#btn-book-appointment").click();
});
