describe('Pets disponíveis para adoção', () => {
    
    it('Listagem de pets', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('a', 'Ver pets disponíveis para adoção').click();
    })
  })