Funcionalidade: Cadastro no site Adopet

Cenário: Realizar um cadastro no site com sucesso

Passos:
O usuário acessa a página de cadastro.
O usuário preenche o campo "Nome".
O usuário preenche o campo "E-mail" com um endereço de e-mail válido.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema processa as informações fornecidas, efetua o cadastro e direciona o usuário para a tela de login.

Regra de Negócio:
E-mail, senha e confirmação de senha são campos obrigatórios para o cadastro.


Cenário: Falha na tentativa de cadastro com os campos em branco

Passos:
O usuário acessa a página de cadastro.
O usuário deixa os campos obrigatórios (nome, email, senha e confirmação de senha) em branco.
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema valida os campos obrigatórios em branco.
O sistema exibe mensagens de erro indicando que os campos obrigatórios devem ser preenchidos.


Cenário: Cadastro sem informar nome

Passos:
O usuário acessa a página de cadastro.
O usuário preenche o campo "E-mail" com um endereço de e-mail válido.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema processa as informações fornecidas, efetua o cadastro e direciona o usuário para a tela de login.

Regra de Negócio:
E-mail, senha e confirmação de senha são campos obrigatórios para o cadastro.


Cenário: Cadastro com senhas divergêntes

Passos:
O usuário preenche o campo "Nome".
O usuário acessa a página de cadastro.
O usuário preenche o campo "E-mail" com um endereço de e-mail válido.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preenche o campo "Confirmação de Senha" diferente da senha.
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema processa as informações fornecidas e informa a mensagem de senhas divergêntes.

Regra de Negócio:
A senha e confirmação de senha devem ser as mesmas.


Cenário: Cadastro de e-mail já cadastrado

Passos:
O usuário acessa a página de cadastro.
O usuário preenche o campo "Nome".
O usuário preenche o campo "E-mail" com um endereço de e-mail válido, por´m já cadastrado.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema processa as informações fornecidas eexibe a mensagem de falha ao cadastrar.

Regra de Negócio:
Não deve ser posível cadastrar um e-mail já cadastrado.