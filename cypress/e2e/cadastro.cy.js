describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/'); //visita uma página web
    cy.get('[data-test="register-button"]').click(); //procura o elemento do botão 'Cadastrar' na tela e efetua o clique
    cy.get('[data-test="input-name"]').type('Alan Cardoso'); //pega o elemento do campo 'Nome' na tela e faz o input do texto
    cy.get('[data-test="input-email"]').type('alcardosos@hotmail.com'); //pega o elemento do campo 'Email' na tela e faz o input do texto
    cy.get('[data-test="input-password"]').type('Teste123'); //pega o elemento do campo 'Senha' na tela e faz o input do texto
    cy.get('[data-test="input-confirm-password"]').type('Teste123'); //pega o elemento do campo 'Confirme sua senha' na tela e faz o input do texto
    cy.get('[data-test="submit-button"]').click(); //procura o elemento do botão 'Cadastrar' na tela e efetua o clique
  })
})