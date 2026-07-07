# Prompt para OpenCode

**Objetivo:**
Modificar apenas o comportamento da seção onde existe uma `<div>` contendo imagens e textos, sem alterar qualquer conteúdo textual existente.

## Requisitos obrigatórios

1. **Não altere nenhuma palavra do texto existente.**

   * Não reescreva.
   * Não traduza.
   * Não remova.
   * Não adicione frases.
   * Preserve 100% do conteúdo atual.

2. O texto deve permanecer **sempre fixo dentro da sua própria div**, independentemente da troca de imagens.

3. O texto **não pode sair da div**, deslocar-se, desaparecer ou acompanhar qualquer animação das imagens.

4. Apenas as imagens devem possuir animações (fade, zoom, slide ou qualquer efeito existente).

5. O conteúdo textual deve permanecer:

   * Estático;
   * Alinhado corretamente;
   * Responsivo;
   * Sempre visível;
   * Sem flickering;
   * Sem re-renderizações desnecessárias.

6. Caso exista um slideshow ou carousel:

   * O slideshow deve controlar **somente as imagens**.
   * O texto não deve fazer parte do estado do slideshow.
   * O texto deve ficar desacoplado da lógica de troca das imagens.

7. Mantenha toda a identidade visual atual:

   * cores;
   * tipografia;
   * espaçamentos;
   * sombras;
   * bordas;
   * responsividade;
   * animações existentes (exceto no texto).

8. Se necessário:

   * reorganize a estrutura dos componentes;
   * utilize posicionamento absoluto/relativo corretamente;
   * separe o componente das imagens do componente textual;
   * elimine qualquer dependência que faça o texto ser recriado a cada mudança de imagem.

9. Preserve toda a compatibilidade com:

   * Next.js;
   * React;
   * TypeScript;
   * Tailwind CSS;
   * Framer Motion (caso esteja em uso).

10. Otimize a performance:

    * evitar renders desnecessários;
    * utilizar memoização quando apropriado;
    * manter código limpo, modular e seguindo boas práticas de um Engenheiro de Software Senior.

## Resultado esperado

Após a implementação:

* ✅ O texto permanece exatamente igual ao original.
* ✅ O texto fica permanentemente fixo na div.
* ✅ Apenas as imagens mudam.
* ✅ Nenhum texto acompanha as transições das imagens.
* ✅ Nenhum texto sai da área da div.
* ✅ O layout permanece moderno, fluido e totalmente responsivo.
* ✅ Todo o restante do sistema continua funcionando normalmente sem regressões.

Implemente todas as alterações automaticamente, validando o funcionamento completo antes de finalizar, sem modificar qualquer outro componente que não seja necessário para atingir este objetivo.
