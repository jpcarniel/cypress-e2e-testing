# Cypress E2E Testing

Automação de testes end-to-end para o [Sauce Demo](https://www.saucedemo.com) usando Cypress.

## O que é testado

- **Login** - autenticação com todos os tipos de usuário (válido, bloqueado, com erro, lento)
- **Inventário** - listagem de produtos, imagens, ordenação (A-Z, Z-A, preço)
- **Detalhe do produto** - informações do item, adicionar/remover do carrinho, navegação
- **Carrinho** - exibição, remoção, persistência entre páginas
- **Checkout** - validação de formulário, caracteres especiais, teste de XSS, cálculo de impostos, fluxo completo de compra

Todos os testes rodam contra 5 perfis de usuário diferentes para capturar bugs específicos por tipo de conta.

> **Nota sobre o CI:** Alguns testes falham propositalmente. O Sauce Demo possui usuários com comportamento defeituoso de fábrica (problem_user, error_user, visual_user). As falhas no CI são bugs reais da aplicação sendo detectados pelos testes, não problemas na automação.

## Stack

- [Cypress](https://www.cypress.io/) 15.x
- JavaScript
- Chrome

## Como executar

```bash
# instalar dependências
npm install

# rodar todos os testes (headless)
npm test

# abrir a interface do Cypress
npm run test:open

# rodar uma suite específica
npm run test:login
npm run test:inventory
npm run test:cart
npm run test:checkout
```

## Estrutura do projeto

```
cypress/
├── e2e/
│   ├── login.cy.js
│   ├── inventory.cy.js
│   ├── inventory-item.cy.js
│   ├── cart.cy.js
│   └── checkout.cy.js
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── InventoryItemPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── fixtures/
│   ├── checkout.json
│   └── products.json
└── support/
    ├── commands.js
    ├── users.js
    └── e2e.js
```

## Arquitetura

- **Page Objects** centralizam seletores e ações por página, facilitando manutenção
- **Fixtures** armazenam dados de teste (cenários de checkout, mapeamento produto-imagem)
- **Custom commands** abstraem fluxos reutilizáveis (login, navegação, checkout)
- **Constantes centralizadas** (`users.js`) evitam repetição de dados entre os testes

## Documentação

- [Plano de Testes](docs/test-plan.md) - escopo, estratégia, ambientes e riscos
- [Casos de Teste](docs/test-cases.md) - 35 casos de teste documentados com passos e resultados esperados
- [Bug Reports](docs/bug-reports.md) - 6 defeitos documentados por perfil de usuário
