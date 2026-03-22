# Bug Reports: Sauce Demo

**Autor:** João Paulo Carniel Fonseca
**Data:** 06/01/2026

---

## BUG-001: Usuário locked_out_user não consegue fazer login

**Severidade:** Alta
**Prioridade:** Alta
**Status:** Aberto
**Caso de teste relacionado:** CT-002

**Descrição:**
O usuário `locked_out_user` não consegue acessar a aplicação. Ao tentar fazer login com credenciais válidas, o sistema exibe mensagem de erro informando que o usuário foi bloqueado.

**Passos para reproduzir:**

| Passo | Ação | Resultado |
|-------|------|-----------|
| 1 | Acessar https://www.saucedemo.com | Página de login carrega |
| 2 | Inserir "locked_out_user" no campo username | Campo preenchido |
| 3 | Inserir "secret_sauce" no campo senha | Campo preenchido |
| 4 | Clicar em Login | Mensagem de erro exibida |

**Resultado esperado:** Login bem-sucedido, redirecionamento para /inventory

**Resultado real:** Mensagem de erro "Epic sadface: Sorry, this user has been locked out."

**Ambiente:** Chrome 146, macOS, Cypress 15.x

---

## BUG-002: Imagens incorretas nos produtos para problem_user

**Severidade:** Média
**Prioridade:** Média
**Status:** Aberto
**Casos de teste relacionados:** CT-003, CT-004

**Descrição:**
Ao logar com `problem_user`, as imagens dos produtos na página de inventário não correspondem aos produtos corretos. Todos os produtos exibem a mesma imagem genérica em vez das imagens individuais de cada item.

**Passos para reproduzir:**

| Passo | Ação | Resultado |
|-------|------|-----------|
| 1 | Fazer login com "problem_user" / "secret_sauce" | Login bem-sucedido |
| 2 | Observar as imagens dos produtos no /inventory | Todas as imagens são iguais |
| 3 | Comparar com login do standard_user | Imagens são diferentes entre os dois usuários |

**Resultado esperado:** Cada produto exibe sua imagem correspondente

**Resultado real:** Todos os produtos exibem a mesma imagem (sl-404.jpg)

**Ambiente:** Chrome 146, macOS, Cypress 15.x

---

## BUG-003: Ordenação de produtos não funciona para problem_user

**Severidade:** Média
**Prioridade:** Média
**Status:** Aberto
**Casos de teste relacionados:** CT-005, CT-006, CT-007, CT-008

**Descrição:**
Ao logar com `problem_user`, os filtros de ordenação de produtos (A-Z, Z-A, menor preço, maior preço) não alteram a ordem dos itens na lista. Os produtos permanecem na mesma ordem independentemente do filtro selecionado.

**Passos para reproduzir:**

| Passo | Ação | Resultado |
|-------|------|-----------|
| 1 | Fazer login com "problem_user" / "secret_sauce" | Login bem-sucedido |
| 2 | Selecionar "Name (Z to A)" no dropdown de ordenação | Produtos não mudam de ordem |
| 3 | Selecionar "Price (low to high)" | Produtos continuam na mesma ordem |

**Resultado esperado:** Produtos reordenados conforme o filtro selecionado

**Resultado real:** Ordem dos produtos não é alterada

**Ambiente:** Chrome 146, macOS, Cypress 15.x

---

## BUG-004: Tempo de resposta excessivo para performance_glitch_user

**Severidade:** Média
**Prioridade:** Baixa
**Status:** Aberto
**Caso de teste relacionado:** CT-001

**Descrição:**
Ao logar com `performance_glitch_user`, o login leva aproximadamente 5 a 6 segundos para completar, enquanto os demais usuários completam o login em menos de 1 segundo. O mesmo comportamento de lentidão se repete em outras interações com a aplicação.

**Passos para reproduzir:**

| Passo | Ação | Resultado |
|-------|------|-----------|
| 1 | Fazer login com "performance_glitch_user" / "secret_sauce" | Login demora ~5 segundos |
| 2 | Comparar com login do standard_user | Login leva menos de 1 segundo |

**Resultado esperado:** Login em tempo razoável (menos de 2 segundos)

**Resultado real:** Login leva entre 5 e 6 segundos

**Ambiente:** Chrome 146, macOS, Cypress 15.x

---

## BUG-005: Erros aleatórios em ações do error_user

**Severidade:** Alta
**Prioridade:** Alta
**Status:** Aberto
**Casos de teste relacionados:** CT-009, CT-020, CT-030, CT-032

**Descrição:**
Ao logar com `error_user`, diversas ações da aplicação falham de forma intermitente. O botão "Remove" do carrinho não funciona, o formulário de checkout apresenta erros ao submeter, e a finalização da compra falha. Os erros não seguem um padrão consistente, dificultando a reprodução.

**Passos para reproduzir:**

| Passo | Ação | Resultado |
|-------|------|-----------|
| 1 | Fazer login com "error_user" / "secret_sauce" | Login bem-sucedido |
| 2 | Adicionar produto ao carrinho | Funciona |
| 3 | Tentar remover produto do carrinho | Botão "Remove" não responde |
| 4 | Prosseguir para checkout e preencher dados | Formulário exibe erro ao submeter |

**Resultado esperado:** Todas as ações funcionam normalmente

**Resultado real:** Ações falham de forma intermitente sem mensagem de erro clara

**Ambiente:** Chrome 146, macOS, Cypress 15.x

---

## BUG-006: Inconsistências visuais para visual_user

**Severidade:** Baixa
**Prioridade:** Baixa
**Status:** Aberto
**Casos de teste relacionados:** CT-003, CT-004, CT-011, CT-030

**Descrição:**
Ao logar com `visual_user`, a aplicação apresenta inconsistências visuais em diversas páginas. Elementos aparecem desalinhados, imagens com tamanhos incorretos, e labels de preço com posicionamento errado. A funcionalidade não é afetada, mas a experiência do usuário é prejudicada.

**Passos para reproduzir:**

| Passo | Ação | Resultado |
|-------|------|-----------|
| 1 | Fazer login com "visual_user" / "secret_sauce" | Login bem-sucedido |
| 2 | Observar a página de inventário | Elementos desalinhados |
| 3 | Acessar detalhe de um produto | Imagem com tamanho incorreto |
| 4 | Prosseguir para checkout | Labels de preço desposicionados |

**Resultado esperado:** Layout consistente com o do standard_user

**Resultado real:** Elementos visuais desalinhados e com tamanhos incorretos

**Ambiente:** Chrome 146, macOS, Cypress 15.x
