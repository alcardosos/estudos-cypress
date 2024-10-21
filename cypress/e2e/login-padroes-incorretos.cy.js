describe('Login', () => {
    beforeEach(() => { //Representa uma function 'Antes de cada'. Para rodar determinados comandos antes da execução do caso de teste
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();
    })
  
    it('Login com credenciais fora dos padrões', () => {
      cy.get('[data-test="input-loginEmail"]').type('alcardososhotmail.com');
      cy.get('[data-test="input-loginPassword"]').type('123');
      cy.get('[data-test="submit-button"]').click();
      cy.contains('Por favor, verifique o email digitado').should('be.visible');
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })
  })