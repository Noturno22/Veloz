# INSTRUÇÃO PARA OPEN CODE — FIXAR TEXTO DA DIV SEM ALTERAR CONTEÚDO

Analise a div/componente onde existem imagens dinâmicas e texto associado.

## MISSÃO PRINCIPAL

Faça com que **todo o texto existente dentro desta div permaneça completamente fixo e independente das imagens**, sem alterar absolutamente nenhum caractere do texto original.

## REGRAS ABSOLUTAS

### 1. Preservação total do texto

* NÃO editar o texto.
* NÃO corrigir escrita.
* NÃO substituir palavras.
* NÃO traduzir.
* NÃO resumir.
* NÃO adicionar conteúdo.
* NÃO remover conteúdo.

O texto deve sair exatamente igual ao código atual.

### 2. Separação entre texto e imagens

Reestruture a lógica se necessário para que:

* O componente de imagens tenha sua própria lógica de animação.
* O componente de texto seja estático.
* A mudança de imagem nunca provoque alteração, reposicionamento ou recriação do texto.

A arquitetura deve seguir esta lógica:

```
DIV PRINCIPAL
│
├── CONTAINER DE TEXTO (FIXO)
│       └── Texto original preservado
│
└── CONTAINER DE IMAGENS (DINÂMICO)
        └── Slideshow / Fade / Animações
```

### 3. Controle das animações

Caso exista:

* Carousel;
* Slider;
* Fade animation;
* Framer Motion;
* Estado React para troca de imagens;

Garanta que essas animações afetem somente as imagens.

O texto NÃO deve:

* receber animações;
* desaparecer;
* piscar;
* reiniciar;
* mudar de posição;
* acompanhar transições.

### 4. Ajuste de estrutura CSS

Corrija o layout utilizando boas práticas:

* `position: relative` no container principal quando necessário.
* `position: absolute` somente se necessário para manter camadas corretas.
* Garantir `z-index` adequado.
* Evitar overflow que corte o texto.
* Garantir responsividade em mobile, tablet e desktop.

### 5. Não alterar identidade visual

Preservar completamente:

* Design atual;
* Cores;
* Fontes;
* Tamanhos;
* Espaçamentos;
* Bordas;
* Sombras;
* Efeitos visuais.

Apenas corrigir o comportamento incorreto.

### 6. Qualidade profissional

Execute como um engenheiro Front-End Senior:

* Código limpo.
* Componentização correta.
* Sem duplicação.
* Sem quebrar funcionalidades existentes.
* Sem criar dependências desnecessárias.
* Melhorar performance caso exista renderização excessiva.

## PROCESSO DE EXECUÇÃO

1. Localize o componente responsável pela div.
2. Identifique o motivo pelo qual o texto está se movimentando junto com as imagens.
3. Corrija somente a causa do problema.
4. Preserve todo conteúdo existente.
5. Execute testes visuais e funcionais.
6. Finalize somente quando:

✅ Texto 100% fixo.
✅ Imagens continuam animadas normalmente.
✅ Nenhuma palavra do texto foi modificada.
✅ Layout continua responsivo.
✅ Nenhuma outra área do projeto foi afetada.

NÃO faça alterações fora do necessário.
