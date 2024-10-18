describe('Cadastro', () => {
  it('Cadastro com Sucesso', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/'); //visita uma página web
    cy.contains('a', 'Cadastrar').click(); //procura o elemento do botão 'Cadastrar' na tela e efetua o clique
    cy.get('input[name="nome"]').type('Alan Cardoso'); //pega o elemento do campo 'Nome' na tela e faz o input do texto
    cy.get('input[name="email"]').type('alcardosos@hotmail.com'); //pega o elemento do campo 'Email' na tela e faz o input do texto
    cy.get('input[name="password"]').type('Teste123'); //pega o elemento do campo 'Senha' na tela e faz o input do texto
    cy.get('input[name="confirm_password"]').type('Teste123'); //pega o elemento do campo 'Confirme sua senha' na tela e faz o input do texto
    cy.contains('button', 'Cadastrar').click(); //procura o elemento do botão 'Cadastrar' na tela e efetua o clique
  })
})