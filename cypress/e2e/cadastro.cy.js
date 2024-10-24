describe('Cadastro', () => {
  
  beforeEach(() => { //Representa uma function 'Antes de cada'. Para rodar determinados comandos antes da execução do caso de teste
    cy.visit('https://adopet-frontend-cypress.vercel.app/'); //visita uma página web
    cy.get('[data-test="register-button"]').click(); //procura o elemento do botão 'Cadastrar' na tela e efetua o clique
  })


  it('Cadastro com sucesso', () => {
    cy.cadastro('Alan Cardoso', 'alcardosos@hotmail.com', 'Teste123', 'Teste123');
  })

  it('Tentativa de cadastro com os campos em branco', () => {
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
    cy.cadastro('Alan Almeida', 'alcardosos@gmail.com', 'Teste123', 'Senha123');
    cy.contains('As senhas não batem').should('be.visible');
  })

  it('Cadastro com e-mail já cadastrado', () => {
    cy.cadastro('Alan', 'alcardosos@hotmail.com', 'Senha123', 'Senha123');
    cy.contains('Falha ao cadastrar!').should('be.visible');
  })
})