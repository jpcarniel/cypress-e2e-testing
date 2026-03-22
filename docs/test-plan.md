# Plano de Testes: Sauce Demo

**Autor:** João Paulo Carniel Fonseca
**Data:** 06/01/2026
**Versão:** 1.0

## Objetivo

Validar o fluxo principal de e-commerce do Sauce Demo, cobrindo autenticação, navegação de produtos, gerenciamento de carrinho e checkout. Os testes são automatizados com Cypress e executados contra múltiplos perfis de usuário para detectar defeitos específicos por tipo de conta.

## Escopo

### Dentro do escopo

- Login (credenciais válidas, usuário bloqueado, usuários com erros)
- Listagem e ordenação de produtos (alfabética, preço)
- Validação de imagens dos produtos
- Página de detalhe do produto
- Operações de carrinho (adicionar, remover, persistência)
- Validação do formulário de checkout (campos vazios, caracteres especiais, inputs longos, XSS)
- Resumo do pedido e cálculo de impostos
- Finalização da compra

### Fora do escopo

- Testes de performance
- Responsividade mobile
- Acessibilidade (WCAG)
- Testes de API/backend

## Ambiente de Testes

- **URL:** https://www.saucedemo.com
- **Navegador:** Chrome (headless no CI, headed local)
- **SO:** Ubuntu (CI), macOS (local)
- **Node.js:** 20.x
- **Cypress:** 15.x

## Perfis de Usuário Testados

| Usuário | Comportamento |
|---------|---------------|
| standard_user | Fluxo normal, sem problemas |
| locked_out_user | Bloqueado no login |
| problem_user | Imagens quebradas, dados inconsistentes |
| performance_glitch_user | Respostas lentas |
| error_user | Falhas aleatórias em ações |
| visual_user | Inconsistências visuais/layout |

## Critérios de Entrada

- Aplicação acessível na URL base
- Todas as credenciais de usuário funcionais
- Cypress e dependências instalados

## Critérios de Saída

- Todas as suites executam sem erros de infraestrutura
- Defeitos encontrados são documentados com passos para reproduzir
- Relatório de testes gerado via Mochawesome

## Estratégia de Testes

Todos os testes são automatizados com Cypress usando o padrão Page Objects para centralizar seletores e ações por página. Os testes são data-driven usando fixtures e executados contra 5 perfis de usuário (locked_out_user é testado apenas no login). O CI roda automaticamente a cada push na branch main via GitHub Actions.

## Riscos

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Sauce Demo sai do ar | Todos os testes falham | Reexecutar CI, sem workaround local |
| Seletores da UI mudam | Testes quebram | Uso de atributos data-test quando disponíveis |
| Testes flaky no performance_glitch_user | Falsos negativos | Timeout aumentado para usuário lento |
