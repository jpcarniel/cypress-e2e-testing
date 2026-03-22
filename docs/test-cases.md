# Casos de Teste: Sauce Demo

**Autor:** João Paulo Carniel Fonseca
**Data:** 06/01/2026

---

## Login

### CT-001: Login com usuário válido

**Prioridade:** Alta
**Tipo:** Funcional

**Pré-condições:** Usuário está na página de login

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Inserir username válido | Campo preenchido |
| 2 | Inserir senha "secret_sauce" | Campo preenchido |
| 3 | Clicar em Login | Redirecionado para /inventory |

**Usuários testados:** standard_user, problem_user, performance_glitch_user, error_user, visual_user

---

### CT-002: Login com usuário bloqueado

**Prioridade:** Alta
**Tipo:** Funcional

**Pré-condições:** Usuário está na página de login

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Inserir "locked_out_user" | Campo preenchido |
| 2 | Inserir senha "secret_sauce" | Campo preenchido |
| 3 | Clicar em Login | Mensagem de erro exibida |

---

## Inventário

### CT-003: Listagem exibe todas as informações dos produtos

**Prioridade:** Alta
**Tipo:** Funcional

**Pré-condições:** Usuário logado em /inventory

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Observar os cards de produto | Cada card exibe imagem, nome, descrição e preço |

---

### CT-004: Imagens dos produtos correspondem aos assets esperados

**Prioridade:** Média
**Tipo:** Visual

**Pré-condições:** Usuário logado em /inventory

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Comparar src de cada imagem | Src contém o nome parcial esperado da fixture |

---

### CT-005: Ordenar produtos de A a Z

**Prioridade:** Média
**Tipo:** Funcional

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Selecionar "Name (A to Z)" no dropdown | Produtos listados em ordem alfabética |

---

### CT-006: Ordenar produtos de Z a A

**Prioridade:** Média
**Tipo:** Funcional

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Selecionar "Name (Z to A)" no dropdown | Produtos listados em ordem alfabética reversa |

---

### CT-007: Ordenar produtos por menor preço

**Prioridade:** Média
**Tipo:** Funcional

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Selecionar "Price (low to high)" no dropdown | Produtos listados por preço crescente |

---

### CT-008: Ordenar produtos por maior preço

**Prioridade:** Média
**Tipo:** Funcional

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Selecionar "Price (high to low)" no dropdown | Produtos listados por preço decrescente |

---

### CT-009: Adicionar e remover produto individual do carrinho

**Prioridade:** Alta
**Tipo:** Funcional

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Clicar em "Add to cart" em um produto | Badge do carrinho aparece |
| 2 | Clicar em "Remove" no mesmo produto | Badge do carrinho desaparece |

---

### CT-010: Badge do carrinho atualiza ao adicionar múltiplos produtos

**Prioridade:** Média
**Tipo:** Funcional

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Adicionar produtos um a um | Contador do badge incrementa a cada adição |

---

## Detalhe do Produto

### CT-011: Página de detalhe exibe todas as informações

**Prioridade:** Alta
**Tipo:** Funcional

**Pré-condições:** Usuário clica em um produto no /inventory

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Observar página de detalhe | Exibe imagem, nome, descrição e preço |

---

### CT-012: Adicionar produto ao carrinho pela página de detalhe

**Prioridade:** Alta
**Tipo:** Funcional

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Clicar em "Add to cart" | Badge do carrinho exibe "1" |

---

### CT-013: Remover produto pela página de detalhe

**Prioridade:** Média
**Tipo:** Funcional

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Adicionar produto ao carrinho | Botão muda para "Remove" |
| 2 | Clicar em "Remove" | Badge do carrinho desaparece |

---

### CT-014: Botão voltar retorna ao inventário

**Prioridade:** Baixa
**Tipo:** Navegação

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Clicar em "Back to products" | Redirecionado para /inventory |

---

## Carrinho

### CT-015: Carrinho exibe informações do produto adicionado

**Prioridade:** Alta
**Tipo:** Funcional

**Pré-condições:** Um produto adicionado ao carrinho

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Navegar até o carrinho | Produto exibe nome, descrição e preço |

---

### CT-016: Remover produto do carrinho

**Prioridade:** Alta
**Tipo:** Funcional

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Clicar em "Remove" | Produto desaparece, badge desaparece |

---

### CT-017: Continue Shopping retorna ao inventário

**Prioridade:** Baixa
**Tipo:** Navegação

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Clicar em "Continue Shopping" | Redirecionado para /inventory |

---

### CT-018: Carrinho persiste após navegar para outra página

**Prioridade:** Média
**Tipo:** Funcional

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Clicar em "Continue Shopping" | Vai para /inventory |
| 2 | Clicar no ícone do carrinho | Carrinho ainda tem o produto |

---

### CT-019: Botão Checkout navega para o primeiro passo

**Prioridade:** Alta
**Tipo:** Navegação

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Clicar em "Checkout" | Redirecionado para /checkout-step-one |

---

## Checkout

### CT-020: Completar checkout com dados válidos

**Prioridade:** Alta
**Tipo:** Funcional

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Preencher nome, sobrenome e CEP | Campos preenchidos |
| 2 | Clicar em Continue | Redirecionado para /checkout-step-two |

---

### CT-021: Erro ao submeter formulário vazio

**Prioridade:** Alta
**Tipo:** Validação

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Clicar em Continue sem preencher campos | Mensagem de erro exibida |

---

### CT-022: Erro ao submeter sem nome

**Prioridade:** Média
**Tipo:** Validação

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Preencher apenas sobrenome e CEP | Mensagem de erro ao clicar Continue |

---

### CT-023: Erro ao submeter sem sobrenome

**Prioridade:** Média
**Tipo:** Validação

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Preencher apenas nome e CEP | Mensagem de erro ao clicar Continue |

---

### CT-024: Erro ao submeter sem CEP

**Prioridade:** Média
**Tipo:** Validação

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Preencher apenas nome e sobrenome | Mensagem de erro ao clicar Continue |

---

### CT-025: Aceitar caracteres especiais nos campos

**Prioridade:** Média
**Tipo:** Boundary

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Preencher campos com caracteres especiais (!@#$%^&*) | Avança para step two |

---

### CT-026: Aceitar campos apenas com números

**Prioridade:** Baixa
**Tipo:** Boundary

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Preencher todos os campos com números | Avança para step two |

---

### CT-027: Aceitar inputs com muitos caracteres

**Prioridade:** Baixa
**Tipo:** Boundary

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Preencher campos com 100+ caracteres | Avança para step two |

---

### CT-028: Injeção XSS não é renderizada

**Prioridade:** Alta
**Tipo:** Segurança

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Preencher campos com tags script e HTML | Avança para step two |
| 2 | Verificar HTML do resumo do pedido | Nenhuma tag script ou img renderizada |

---

### CT-029: Cancelar retorna ao carrinho

**Prioridade:** Baixa
**Tipo:** Navegação

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Clicar em Cancel no step one | Redirecionado para /cart |

---

### CT-030: Resumo do pedido exibe produto e preços

**Prioridade:** Alta
**Tipo:** Funcional

**Pré-condições:** Usuário está em /checkout-step-two

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Observar resumo | Nome do produto, preço, subtotal, imposto e total visíveis |

---

### CT-031: Cálculo de imposto está correto

**Prioridade:** Alta
**Tipo:** Funcional

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Ler subtotal, imposto e total | subtotal + imposto = total (margem de $0.01) |

---

### CT-032: Finalizar compra

**Prioridade:** Alta
**Tipo:** Funcional

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Clicar em Finish | Redirecionado para /checkout-complete |

---

### CT-033: Página de confirmação exibe mensagem de sucesso

**Prioridade:** Alta
**Tipo:** Funcional

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Observar página de checkout completo | Cabeçalho e texto de confirmação visíveis |

---

### CT-034: Carrinho vazio após finalizar compra

**Prioridade:** Média
**Tipo:** Funcional

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Verificar badge do carrinho | Badge não existe |

---

### CT-035: Back Home retorna ao inventário

**Prioridade:** Baixa
**Tipo:** Navegação

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Clicar em "Back Home" | Redirecionado para /inventory |
