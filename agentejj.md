# CONTINUAÇÃO DO PROJETO — CORREÇÃO COMPLETA DO SISTEMA DE TRADUÇÃO

Esta tarefa é uma **continuação do projeto existente**.

O seletor de idiomas já foi implementado e a interface já possui vários idiomas cadastrados. No entanto, apenas **Português** e **Inglês** estão funcionando corretamente. Os demais idiomas aparecem na lista, mas não traduzem completamente a interface ou apresentam falhas.

## OBJETIVO

Corrigir toda a lógica do sistema de internacionalização (i18n), garantindo que **100% dos idiomas disponíveis no seletor funcionem exatamente como Português e Inglês**.

Não quero uma nova implementação.

Quero reparar e concluir a implementação existente.

---

# NÃO ALTERAR

Não alterar o design.

Não alterar o layout.

Não alterar componentes React.

Não alterar Tailwind CSS.

Não alterar animações.

Não alterar estilos.

Não alterar estrutura HTML.

Não alterar SEO.

Não alterar rotas.

Não alterar a arquitetura do projeto.

Não remover funcionalidades existentes.

Não criar um novo sistema de tradução.

Não substituir a biblioteca de internacionalização já utilizada.

---

# FAZER APENAS

Analisar toda a implementação atual.

Encontrar a causa pela qual apenas Português e Inglês funcionam corretamente.

Corrigir toda a lógica.

Garantir que todos os idiomas disponíveis funcionem de forma idêntica.

---

# ANÁLISE OBRIGATÓRIA

Antes de alterar qualquer código, analisar completamente:

* configuração do i18n
* provider
* contexto de idiomas
* hooks
* loaders
* arquivos JSON
* namespaces
* imports
* lazy loading
* language detector
* fallback language
* troca dinâmica de idioma
* persistência do idioma
* sincronização entre componentes
* carregamento assíncrono
* cache
* localStorage
* cookies (caso utilizados)

Encontrar qualquer erro estrutural existente.

---

# CORRIGIR

Verificar que todos os arquivos de tradução:

* existem
* possuem a mesma estrutura
* possuem as mesmas chaves
* possuem os mesmos namespaces
* não possuem chaves ausentes
* não possuem erros de sintaxe
* não possuem traduções quebradas

Caso existam chaves faltando:

Criá-las automaticamente seguindo a estrutura de Português.

Caso existam arquivos incompletos:

Completar automaticamente.

---

# PADRONIZAÇÃO

Todos os idiomas devem possuir exatamente a mesma estrutura.

Exemplo:

```text
/locales

pt
common.json

en
common.json

es
common.json

fr
common.json

de
common.json

it
common.json

...
```

Cada arquivo deve conter exatamente as mesmas chaves.

Nenhuma chave pode existir apenas em Português.

Nenhuma chave pode faltar nos outros idiomas.

---

# FUNCIONAMENTO

Ao selecionar qualquer idioma:

A interface inteira deverá ser traduzida imediatamente.

Sem necessidade de atualizar a página.

Sem recarregar a aplicação.

Sem perder estado.

Sem erros.

Sem telas em branco.

Sem textos misturados.

Sem chaves aparecendo na tela.

Sem conteúdo parcialmente traduzido.

---

# BOTÃO DE IDIOMA

O seletor já existe.

Não alterar aparência.

Não alterar posição.

Não alterar animações.

Corrigir apenas a lógica.

Ao selecionar um idioma:

* salvar preferência
* atualizar imediatamente toda a interface
* manter idioma após atualizar a página
* manter idioma após fechar e abrir o navegador
* sincronizar toda a aplicação

---

# PERFORMANCE

Implementar seguindo padrões de um Engenheiro de Software Sênior.

* Lazy Loading das traduções
* Code Splitting
* Cache inteligente
* Evitar re-renderizações
* Imports dinâmicos
* Memoização quando necessário
* Alta performance
* Código limpo
* Código escalável
* Código modular
* Fácil manutenção

---

# TRATAMENTO DE ERROS

Caso algum arquivo esteja ausente:

Não quebrar a aplicação.

Utilizar fallback.

Registrar erro apenas no console.

Nunca mostrar erros ao utilizador.

---

# QUALIDADE DO CÓDIGO

Produzir código com padrão enterprise.

Seguir boas práticas de React e TypeScript (caso o projeto utilize TypeScript).

Separar responsabilidades.

Evitar duplicação de código.

Eliminar código morto.

Eliminar imports desnecessários.

Eliminar lógica redundante.

---

# VALIDAÇÃO FINAL

Antes de concluir, verificar que:

✓ Todos os idiomas do seletor funcionam.

✓ Todos traduzem 100% da interface.

✓ Nenhuma chave aparece na tela.

✓ Nenhum texto permanece em Português quando outro idioma estiver selecionado (exceto conteúdos intencionalmente fixos).

✓ A troca de idioma é instantânea.

✓ O idioma permanece salvo após reiniciar a aplicação.

✓ Não existem erros no Console.

✓ Não existem warnings.

✓ Não existem problemas de hidratação.

✓ Não existem problemas de renderização.

✓ Não existem regressões nas funcionalidades existentes.

---

# RESULTADO ESPERADO

O sistema de tradução deverá atingir nível de produção (Production Ready), funcionando de forma robusta, rápida e consistente em todos os idiomas disponíveis, exatamente como acontece atualmente com Português e Inglês, sem qualquer alteração visual na interface e mantendo integralmente a arquitetura existente do projeto.
