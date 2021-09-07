<h1 aling="center">Desafio CelCoin - QA</h1>

<p>Esse desafio tem como objetivo testar implementações de testes automatizados utilizando cypress</p>

## Sobre o projeto
Esse projeto é um desafio para a empresa Celcoin para medir o nível de conhecimento na área de implementação de testes automatizados utilizando o Cypress.
Foi proposto acessar o site [YourLogo](http://automationpractice.com/index.php) um site ecommerce para realizar os 3 cenários de testes propostos:
- Automatizar o processo de criar conta de um novo usuário.
- Realizar o login com uma conta criada.
- Selecionar um pedido e adicionar ao carrinho.
- Validar se o pedido está adicionado no carrinho.

## Requerimentos
- [Node v10+](https://nodejs.org/en/docs/)
- [NPM](https://www.npmjs.com/) or [Yarn](https://classic.yarnpkg.com/en/docs/)


## Instalando as dependências
- Usando npm
  ```bash
    npm install
  ```
- Usando yarn
  ```bash
    yarn
  ```

## Rodando a interface do ambiente Cypress
- Usando a interface cypress
  apois realizar a instalações das dependências, poderá utilizar o seguinte comando
  ```bash
  ./node_modules/.bin/cypress open
  ``` 
  Ou pode utilizar
  ```bash
  yarn cypress:open
  ```
  Vai abrir a interface do ambiente Cypress e basta clicar no teste denominado <i>Teste_web.spec.js</i>

  ## Rodando o cypress sem a interface
  - Para utilizar o cypress sem a interface, utilize o seguinte comando
  ```bash
   npx cypress run
   ```
   Irá aparecer no terminal todos os passos que o teste executou, lembre-se que será exportado um vídeo do teste sendo realizado, caso não tenha interesse do vídeo siga esse passo:
   ```bash
   npx cypress run --config video=false
   ```

  ## Pontos de atenção
  - No arquivo <b>cypress.json</b> foi criado uma env, com variáveis que estão sendo utilizadas nos testes, foi utilizado a biblioteca uuid para criar números aleatórios para realizar os testes de cadastro de email do cliente.
  