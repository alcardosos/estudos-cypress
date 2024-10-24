describe('Pets disponíveis para adoção', () => {

    it('Listagem de pets', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.button').click();
        cy.get('.cards').should('be.visible');
    })
  })