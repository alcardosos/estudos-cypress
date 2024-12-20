describe('Login', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
      statusCode: 400, }).as('stubPost');
  })

  it('Login com credenciais válidas', () => {
    cy.get('[data-test="login-button"]').click();
    cy.login('alcardosos@hotmail.com', 'Teste123');
  })

  it('Login com credenciais fora dos padrões', () => {
    cy.get('[data-test="login-button"]').click();
    cy.login('alcardososhotmail.com', '123');
    cy.contains('Por favor, verifique o email digitado').should('be.visible');
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
  })

  it('Login com credenciais válidas via tela de mensagens', () => {
    cy.get('.header__message').click();
    cy.login('alcardosos@hotmail.com', 'Teste123');
  })

  it('Login com e-mail não cadastrado', () => {
    cy.get('[data-test="login-button"]').click();
    cy.login('alcardosos@errado.com', 'Teste123');
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
  })

  it('Login com senha não cadastrada', () => {
    cy.get('[data-test="login-button"]').click();
    cy.login('alcardosos@hotmail.com', 'Senha123');
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
  })

  it('Tentativa de login com os campos em branco', () => {
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Insira sua senha').should('be.visible');
  })

  it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
    cy.get('[data-test="login-button"]').click();
    cy.login('alcrosos@hotmail.com', 'Teste123');
    cy.wait('@stubPost');
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
  })
})