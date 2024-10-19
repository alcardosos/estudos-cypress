describe('Login', () => {
    it('Login com credenciais válidas', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/login');
      cy.get('input[name="email"]').type('alcardosos@hotmail.com');
      cy.get('input[name="password"]').type('Teste123');
      cy.contains('button', 'Entrar').click();
    })
  })