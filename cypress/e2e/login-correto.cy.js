describe('Login', () => {
  beforeEach(() => { //Representa uma function 'Antes de cada'. Para rodar determinados comandos antes da execução do caso de teste
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })

  it('Login com credenciais válidas', () => {
    cy.get('[data-test="input-loginEmail"]').type('alcardosos@hotmail.com');
    cy.get('[data-test="input-loginPassword"]').type('Teste123');
    cy.contains('[data-test="submit-button"]').click();
  })
})