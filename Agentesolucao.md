# Prompt de Desenvolvimento Frontend (Alterações Específicas)

Execute as alterações abaixo com extremo profissionalismo, preservando toda a arquitetura, lógica, componentes e funcionalidades existentes. **Não altere nenhum elemento além do que foi explicitamente solicitado.**

## 1. Página Principal (Home) – Seção Hero (logo abaixo do cabeçalho)

Trabalhe **exclusivamente** na primeira seção imediatamente abaixo do cabeçalho, onde está localizado o carrossel/banner principal.

### Objetivos

* Fazer com que a **imagem de fundo** ocupe **100% da área da seção**, preenchendo completamente:

  * largura;
  * altura;
  * todas as bordas;
  * sem deixar espaços vazios.

* A imagem deve utilizar comportamento equivalente a:

  * `background-size: cover`;
  * `background-position: center`;
  * `background-repeat: no-repeat`.

* A implementação deve funcionar perfeitamente em:

  * Desktop;
  * Tablet;
  * Mobile;
  * Aplicativo (caso utilize WebView ou versão responsiva).

### Responsividade

A seção deve ser totalmente responsiva sem deformar a imagem.

Independentemente da resolução da tela, a imagem deverá permanecer cobrindo toda a área da seção.

### Estabilidade da imagem

Este é o ponto mais importante.

O conteúdo interno (título, descrição, botões ou qualquer texto) muda conforme o idioma selecionado.

Mesmo quando esses textos aumentarem ou diminuírem de tamanho:

* a imagem NÃO deve mudar de escala;
* NÃO deve sofrer redimensionamentos inesperados;
* NÃO deve perder proporção;
* NÃO deve deslocar sua posição;
* NÃO deve deixar áreas vazias.

A imagem deve permanecer visualmente estável e fixa atrás de todo o conteúdo, ocupando integralmente o espaço da seção.

Nenhuma outra parte da Home deve ser alterada.

---

# 2. Página Principal – Atualização dos indicadores

Localize todas as áreas da Home que apresentam os indicadores institucionais.

Atualize apenas os seguintes valores:

* Parceiros Globais → **12+**
* Transações → **27+**
* Volume Negociado → **200k+**

Não altere:

* estilos;
* ícones;
* layout;
* animações;
* espaçamento;
* tipografia.

Apenas os números.

---

# 3. Página Commodities

Localize a seção de indicadores.

Alterar apenas:

* Negócios Ativos → **50+**
* Volume Anual → **300.5k+**

Não modificar mais nada nesta seção.

---

## Cards das Commodities

Na mesma página existem cards das commodities (agrícolas, minerais, energéticas etc.).

Remova apenas os textos referentes a:

* Volume
* Active Deals
* Markets

Apenas essas informações devem desaparecer.

Todo o restante deve permanecer exatamente igual:

* imagens;
* títulos;
* descrição;
* layout;
* hover;
* animações;
* botões;
* responsividade.

---

# 4. Página Parceiras

Garantir que **100% dos textos da página** respeitem o sistema de internacionalização (i18n).

Isso significa que:

* ao trocar o idioma;
* todos os textos devem ser traduzidos corretamente;
* nenhum texto pode permanecer fixo em um único idioma.

Não alterar layout ou design.

---

## Seção "Confiança Global"

Na área onde atualmente aparecem os continentes, substituir pelos nomes reais dos cinco continentes:

* África
* América
* Ásia
* Europa
* Oceania

Esses nomes também devem participar do sistema de tradução, exibindo automaticamente o idioma atualmente selecionado pelo usuário.

---

# Requisitos Técnicos

* Não modificar componentes que não foram solicitados.
* Não alterar rotas.
* Não alterar APIs.
* Não alterar lógica de negócio.
* Não alterar estado global.
* Não alterar animações existentes.
* Não alterar SEO.
* Não alterar estilos fora das seções mencionadas.
* Não criar regressões.
* Preservar totalmente a responsividade existente.
* Manter compatibilidade entre Website e Aplicativo.

Antes de concluir, revisar cuidadosamente todas as alterações para garantir que apenas os pontos solicitados foram modificados e que o restante do projeto permaneça absolutamente intacto.
