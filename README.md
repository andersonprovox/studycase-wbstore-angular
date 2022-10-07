# Web Store 
Uma loja web com a apresentação de produtos, adição no carrinho de compras e procedimento de pagamento.
## Objetivo
Construir uma aplicação web de uma loja online com a possibilidade de selecionar produtos e fazer pagamentos.
## Status
Desenvolvido, mas pendente de revisão
## Features

- [X] Apresentar produtos para compra.
- [X] Consumir API com a informação dos produtos
- [X] Adicionar produtos a um carrinho de compras
- [X] visualizar carrinho de compras de forma resumida na front page
- [X] Excluir produtos do carrinho de compras do pop up de resumo
- [X] Visualizar produtos selecionados na página do carrinho de compras
- [X] Selecionar e excluir produtos específicos na lista de produtos na página do carrinho de compras
- [X] Finalizar pagamento na página de confirmação
- [X] Adicionar filtros por categoria, total de produtos a serem exibidos e ordem crescente ou decrescente
- [] Inserir frete na página de confirmação do pagamento
## Techs Utlizadas
- **Tailwind**: Framework CSS responsável pela estilização da página.
- **Angular Material**: Componentes de Material Design
- **Angular**: Framework web para o desenvolvimento de SPA
- **Node.js**: Ambiente de desenvolvimento cross-platform, no qual vamos montar o projeto Angular e o servidor de pagamento
- **fakestore-api**: API da qual será consumido os dados para a exibição da lista de produtos
- **stripe**: Plataforma de pagamentos para a internet

## Deploy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
