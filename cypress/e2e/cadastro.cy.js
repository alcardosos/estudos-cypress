describe('Cadastro', () => {
  beforeEach(() => { //Representa uma function 'Antes de cada'. Para rodar determinados comandos antes da execução do caso de teste
    cy.visit('https://adopet-frontend-cypress.vercel.app/'); //visita uma página web
    cy.get('[data-test="register-button"]').click(); //procura o elemento do botão 'Cadastrar' na tela e efetua o clique
  })


  it('Cadastro com sucesso', () => {
    cy.get('[data-test="input-name"]').type('Alan Cardoso'); //pega o elemento do campo 'Nome' na tela e faz o input do texto
    cy.get('[data-test="input-email"]').type('alcardosos@hotmail.com'); //pega o elemento do campo 'Email' na tela e faz o input do texto
    cy.get('[data-test="input-password"]').type('Teste123'); //pega o elemento do campo 'Senha' na tela e faz o input do texto
    cy.get('[data-test="input-confirm-password"]').type('Teste123'); //pega o elemento do campo 'Confirme sua senha' na tela e faz o input do texto
    cy.get('[data-test="submit-button"]').click(); //procura o elemento do botão 'Cadastrar' na tela e efetua o clique
  })

  it('Falha na tentativa de cadastro com os campos em branco', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible'); //Comando que verifica se a mensagem está visível na tela
    cy.contains('Crie uma senha').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible');
  })

  it('Cadastro sem informar nome', () => {
    cy.get('[data-test="input-email"]').type('alcardosos04@gmail.com'); 
    cy.get('[data-test="input-password"]').type('Teste123');
    cy.get('[data-test="input-confirm-password"]').type('Teste123');
    cy.get('[data-test="submit-button"]').click();
  })

  it('Cadastro com senhas divergêntes', () => {
    cy.get('[data-test="input-name"]').type('Alan Almeida'); 
    cy.get('[data-test="input-email"]').type('alcardosos@gmail.com'); 
    cy.get('[data-test="input-password"]').type('Teste123'); 
    cy.get('[data-test="input-confirm-password"]').type('Senha123'); 
    cy.get('[data-test="submit-button"]').click();
    cy.contains('As senhas não batem').should('be.visible');
  })

  it('Cadastro com senhas divergêntes', () => {
    cy.get('[data-test="input-name"]').type('Alan'); 
    cy.get('[data-test="input-email"]').type('alcardosos@hotmail.com'); 
    cy.get('[data-test="input-password"]').type('Senha123'); 
    cy.get('[data-test="input-confirm-password"]').type('Senha123'); 
    cy.get('[data-test="submit-button"]').click();
    cy.contains('Falha ao cadastrar!').should('be.visible');
  })
})