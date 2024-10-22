Funcionalidade: Login no site Adopet

Cenário: Realizar um login com credenciais válidas

Passos:
O usuário acessa a página de login.
O usuário preenche o campo "E-mail" com e-mail válido e cadastrado.
O usuário preenche o campo "Senha" com a senha cadastrada para o e-mail inserido.
O usuário clica no botão "Entrar".

Resultados Esperados:
O sistema processa as informações fornecidas, efetua o login e direciona o usuário para a Home.

Regra de Negócio:
E-mail e senha são campos obrigatórios para o cadastro.


Cenário: Login com credênciais fora dos padrões

Passos:
O usuário acessa a página de login.
O usuário preenche o campo "E-mail" com um e-mail fora do padrão (sem "@" e/ou ".com").
O usuário preenche o campo "Senha" com uma senha fora do padrão ("123").
O usuário clica no botão "Entrar"

Resultados Esperados:
O sistema valida os campos.
O sistema exibe mensagens de erro indicando que os campos não foram preenchidos corretamente.

Regra de Negócio:
O e-mail deve ter um formato válido (com "@" e ".com").
A senha deve conter ao menos 1 letra maiúscula, um número e ter entre 6 e 15 caracteres.


Cenário: Login a partir do ícone de mensagens

Passos: O usuário acessa a página de login através do ícone de "Mensagens" na página principal
O usuário preenche o campo "E-mail" com e-mail válido e cadastrado.
O usuário preenche o campo "Senha" com a senha cadastrada para o e-mail inserido.
O usuário clica no botão "Entrar".

Resultados Esperados:
O sistema processa as informações fornecidas, efetua o login e direciona o usuário para a Home.

Regra de Negócio:
E-mail e senha são campos obrigatórios para o cadastro.


Cenário: Login com e-mail não cadastrado

Passos:
O usuário acessa a página de login.
O usuário preenche o campo "E-mail" com e-mail válido e não cadastrado.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário clica no botão "Entrar".

Resultados Esperados:
O sistema valida os campos.
O sistema exibe mensagens de erro indicando falha no login.

Regra de Negócio:
E-mail e senha devem ser compatíveis com o cadastro do usuário.

Cenário: Login com senha não cadastrada

Passos:
O usuário acessa a página de login.
O usuário preenche o campo "E-mail" com e-mail válido e cadastrado.
O usuário preenche o campo "Senha" com uma senha dentro dos padrões, porém não correspondente ao e-mail informado.
O usuário clica no botão "Entrar".

Resultados Esperados:
O sistema valida os campos.
O sistema exibe mensagens de erro indicando falha no login.

Regra de Negócio:
E-mail e senha devem ser compatíveis com o cadastro do usuário.