# Análise do Projeto Zentra Connect

> Data: 28/06/2026
> Projeto: Zentra Trading — Plataforma corporativa de intermediação de commodities

---

## Sumário

1. [Visão Geral](#1-visão-geral)
2. [Erros e Problemas Encontrados](#2-erros-e-problemas-encontrados)
3. [Análise Técnica Detalhada](#3-análise-técnica-detalhada)
4. [Próximos Passos](#4-próximos-passos)
5. [Checklist de Prioridades](#5-checklist-de-prioridades)

---

## 1. Visão Geral

| Item | Descrição |
|---|---|
| **Tipo** | Site corporativo / marketing |
| **Framework** | TanStack Start (Nitro + Vite + TanStack Router) |
| **Linguagem** | TypeScript + React 19 |
| **UI** | Tailwind CSS v4 + shadcn/ui (New York) |
| **i18n** | Custom (Inglês + Português) |
| **Deploy** | Vercel (preset Nitro `vercel`) |
| **Runtime** | Node.js (server-side rendering) |
| **Testes** | Nenhum |
| **Package Manager** | Bun |

### Estrutura de Rotas

| Rota | Página |
|---|---|
| `/` | Home (hero, formulário, dashboard, mapa-mundo, CTA) |
| `/about` | Sobre (missão, visão, valores) |
| `/commodities` | Commodities (agrícolas, minerais, energia, industriais) |
| `/how-it-works` | Como Funciona (passos + serviços) |
| `/insights` | Análises de Mercado / Blog |
| `/opportunities` | Marketplace de Oportunidades |
| `/partnership` | Parcerias (tiers) |
| `/contact` | Contacto (formulário + mapa) |

---

## 2. Erros e Problemas Encontrados

### 🔴 CRÍTICOS (devem ser resolvidos imediatamente)

#### 2.1. Formulários não submetem dados

**Arquivos:** `src/routes/index.tsx:139`, `src/routes/contact.tsx:59`

Os dois formulários principais do site chamam `e.preventDefault()` e **descartam todos os dados do usuário** sem nenhum envio (API, email, etc.). O formulário de registo na homepage e o formulário de contacto são completamente não funcionais.

```typescript
onSubmit={(e) => e.preventDefault()}
```

**Impacto:** Perda total de leads. O principal CTA do site não funciona.

#### 2.2. Inputs sem atributo `name`

**Arquivos:** `src/routes/index.tsx:146-166`, `src/routes/contact.tsx:63-78`

Nenhum `<input>`, `<select>` ou `<textarea>` possui o atributo `name`, que é obrigatório para:
- Submissão de formulários
- Acessibilidade (leitores de tela)
- Autofill do navegador

---

### 🟠 ALTOS

#### 2.3. 46 componentes shadcn/ui não utilizados

**Pasta:** `src/components/ui/` (46 arquivos)

Nenhum destes componentes é importado por nenhuma rota ou componente do site. O pacote inclui dependências pesadas como `recharts` (~800KB), `react-day-picker`, `cmdk`, `vaul`, `embla-carousel-react`, etc. Estima-se **1-2MB+ de JavaScript desnecessário** no bundle final.

#### 2.4. react-hook-form + zod instalados mas não usados

`package.json` lista `react-hook-form`, `@hookform/resolvers` e `zod`, mas os formulários usam inputs puros sem qualquer biblioteca de formulário. ~30KB+ no bundle sem utilidade.

#### 2.5. React Query (`QueryClient`) configurado mas nunca usado

`src/router.tsx:6` e `src/routes/__root.tsx:126` — `QueryClient` e `QueryClientProvider` são criados e fornecidos à árvore React, mas nenhum hook de React Query (`useQuery`, `useMutation`, etc.) é chamado em lugar nenhum do código.

#### 2.6. Strings hardcoded sem tradução para PT

- **`Commodity Distribution`** — `src/routes/index.tsx:311` — fica em inglês mesmo com idioma PT
- **Nomes de commodities** (Coffee, Soybeans, Gold, Oil, etc.) — `src/routes/index.tsx:47-51`, `src/routes/commodities.tsx:26-29`
- **Dados de oportunidades** (títulos "Coffee Export", "Gold Trading", rotas, quantidades) — `src/routes/opportunities.tsx:30-36,58-59`

#### 2.7. `react-simple-maps` sem tipos

`src/types/react-simple-maps.d.ts:1` — `declare module "react-simple-maps"` vazio faz todo o componente WorldMap ser tipado como `any`. Qualquer erro de uso da biblioteca passa despercebido.

#### 2.8. Navegação sem `aria-current="page"`

`src/components/site/SiteHeader.tsx:52-61` — O link ativo é indicado visualmente (classe `text-gold`), mas não há `aria-current="page"`. Leitores de tela não identificam a página atual.

#### 2.9. Formulários sem validação

Nenhum campo é validado (campos obrigatórios, formato de email, tamanho máximo, sanitação). Risco de XSS e injeção se um backend for conectado no futuro.

#### 2.10. Labels de formulário ausentes

Inputs e selects dependem apenas de `placeholder` para descrever o campo. Placeholders desaparecem ao digitar e não substituem `<label>` ou `aria-label`.

---

### 🟡 MÉDIOS

#### 2.11. `key={index}` em listas (4 ocorrências)

- `src/routes/index.tsx:113` — círculos decorativos
- `src/routes/index.tsx:424` — círculos SVG no MiniChart
- `src/routes/insights.tsx:47` — artigos do blog
- `src/components/site/WorldMap.tsx:57` — rotas do mapa

O uso de índice como key impede o React de rastrear elementos corretamente se a ordem mudar.

#### 2.12. Cache de promessa rejeitada em `getServerEntry()`

`src/server.ts:12-18` — Se o `import()` dinâmico falhar, a promessa rejeitada é cacheadas para sempre. O servidor nunca recupera sem restart.

#### 2.13. Middleware de erro muito abrangente

`src/start.ts:5-18` — O middleware captura **todos** os erros (exceto os que têm `statusCode`) e retorna um `new Response(...)`, bypassando error boundaries do React.

#### 2.14. `catch {}` vazios (4 ocorrências)

`src/lib/theme.tsx:23,28` e `src/lib/i18n.tsx:22,30` — Exceções de `localStorage` em modo anônimo e `navigator.language` em SSR são engolidas silenciosamente, dificultando debugging.

#### 2.15. Ping animation sem `aria-hidden`

`src/components/site/WhatsAppFab.tsx:16` — Elemento decorativo com `animate-ping` sem `aria-hidden="true"`. Leitores de tela podem anunciá-lo.

#### 2.16. Social links com `aria-label` genérico

`src/components/site/SiteFooter.tsx:23-31` — Todos os links de redes sociais partilham o mesmo `aria-label="Social"`. Usuários de leitores de tela não distinguem as plataformas.

#### 2.17. Contraste de cor com opacidade baixa

Padrão `text-foreground/60`, `text-foreground/70`, etc. usado em todo o site. Pode ficar abaixo do rácio 4.5:1 (WCAG AA) em fundo claro.

#### 2.18. Config TypeScript permissiva

- `noUnusedLocals: false` e `noUnusedParameters: false` — código morto não é detectado
- `skipLibCheck: true` — erros de tipos em dependências são ignorados

#### 2.19. ESLint com `no-unused-vars: off`

`eslint.config.js:36` — Combinado com tsconfig permissivo, não há nenhuma proteção contra código morto.

#### 2.20. URLs canónicas relativas

`src/routes/__root.tsx:96-98`, `src/routes/index.tsx:22`, `src/routes/about.tsx:16` — Canonical URLs usam caminhos relativos (`"/"`, `"/about"`) em vez de URLs absolutas (`https://zentratrading.com/...`).

---

### 🟢 BAIXOS

- `fetchPriority` em `<img>` pode não ser reconhecido por todas as versões de tipos React
- WorldMap faz fetch externo de TopoJSON em cada render (sem cache local)
- `React.memo` ausente em componentes estáticos (Logo, Footer, PageHero)
- Funções inline em props JSX criadas a cada render
- Número de WhatsApp exposto no source (aceitável para site de contacto)
- Logo `alt` hardcoded em vez de usar chave de tradução
- Dois lockfiles (`bun.lock` + `package-lock.json`) podem causar inconsistências
- `chart.tsx` usa `dangerouslySetInnerHTML` para CSS (vetor de ataque CSS injection se dados forem controláveis por usuário)

---

## 3. Análise Técnica Detalhada

### 3.1. Arquitetura Atual

```
TanStack Start (SSR Node.js)
├── Roteamento (file-based)
├── Providers
│   ├── QueryClientProvider (não usado)
│   ├── ThemeProvider (light/dark)
│   └── I18nProvider (en/pt)
├── Páginas (8 rotas)
│   ├── Todas com SEO (meta tags, canonical)
│   └── Conteúdo estático + i18n
├── Erro
│   ├── SSR: Middleware em start.ts
│   ├── Client: ErrorBoundary em __root.tsx
│   └── Lovable error reporting
└── Deploy Vercel (Nitro preset)
```

### 3.2. Bundle Atual

O bundle inclui muito código morto:

| Categoria | Peso estimado |
|---|---|
| **Código usado** (rotas + site components) | ~150-200KB |
| **shadcn/ui não usado** (46 componentes) | ~200-300KB |
| **recharts** (via chart.tsx) | ~800KB |
| **QueryClient infra** | ~29KB |
| **react-hook-form + zod** | ~30KB+ |
| **Radix UI não usados** | ~200-300KB+ |
| **Outras libs não usadas** | ~100-200KB |
| **Total estimado atual** | **~1.5-2MB+** |
| **Total após remoção de dead code** | **~150-200KB** |

### 3.3. Cobertura de Tradução

O sistema de tradução é uma implementação caseira que funciona, mas com lacunas:

- **Strings traduzidas:** ~90-95% do conteúdo visível
- **Strings não traduzidas:** Nomes de commodities específicos, dados mockados do dashboard, títulos de oportunidades
- **Problema estrutural:** Tipos de commodities como "Coffee", "Gold" são usados diretamente como string em vez de chaves de tradução

---

## 4. Próximos Passos

### Fase 1 — Correções Críticas (urgente)

1. **Implementar submissão dos formulários** — Conectar formulário de registo + contacto a um backend (API route, email service, ou webhook)
2. **Adicionar `name` a todos os inputs** — Para acessibilidade, autofill e submissão
3. **Adicionar validação de formulários** — Usar `react-hook-form` + `zod` (já instalados!) ou implementar validação nativa

### Fase 2 — Limpeza de Dead Code

4. **Remover 46 componentes shadcn/ui não utilizados** — Deixar apenas os que são efetivamente importados
5. **Remover dependências não usadas** — `recharts`, `cmdk`, `react-day-picker`, `embla-carousel-react`, `vaul`, `react-resizable-panels`, `input-otp` e Radix UI não usados
6. **Remover `QueryClient` + `QueryClientProvider`** — A menos que haja plano de usar React Query
7. **Remover `react-hook-form` e `zod` das deps** — Se optar por validação nativa; caso contrário, **usá-los** nos formulários

### Fase 3 — Internacionalização

8. **Traduzir strings hardcoded** — Adicionar chaves para: commodity names, dashboard labels, opportunity data
9. **Estruturar dados de oportunidades e commodities com chaves i18n**

### Fase 4 — Acessibilidade

10. **Adicionar `aria-current="page"`** na navegação ativa
11. **Adicionar `aria-hidden="true"`** em elementos decorativos (ping animation)
12. **Melhorar `aria-label` dos links sociais** — Específico por plataforma
13. **Verificar contraste de cores** — Especialmente textos com opacidade reduzida
14. **Adicionar labels a todos os inputs** (`<label>` ou `aria-label`)

### Fase 5 — Qualidade de Código

15. **Ativar `noUnusedLocals` e `noUnusedParameters`** no tsconfig
16. **Ativar `no-unused-vars`** no ESLint
17. **Substituir `key={index}` por keys estáveis** em todas as listas
18. **Adicionar tipagem real para `react-simple-maps`**
19. **Melhorar error handling** — Logging em `catch {}` vazios, retry para `getServerEntry()`

### Fase 6 — Performance

20. **Implementar cache local para TopoJSON** no WorldMap (ou usar import estático)
21. **Adicionar `React.memo`** em componentes estáticos (Logo, Footer, PageHero)
22. **Eliminar `as any`** nos casts de CSS properties e route definitions
23. **Resolver inconsistência de lockfiles** — Remover `package-lock.json` se usar Bun

### Fase 7 — Infraestrutura

24. **Configurar testes** — Vitest + React Testing Library (padrão do ecossistema)
25. **Adicionar URLs canónicas absolutas**
26. **Configurar monitoramento de erros em produção**
27. **Criar API para formulários** (endpoint `POST /api/contact` e `POST /api/register`)

---

## 5. Checklist de Prioridades

| # | Tarefa | Prioridade | Esforço | Impacto |
|---|---|---|---|---|
| 1 | Submissão de formulários | 🔴 Crítica | Médio | Alto |
| 2 | Atributo `name` nos inputs | 🔴 Crítica | Pequeno | Alto |
| 3 | Validação de formulários | 🔴 Crítica | Médio | Alto |
| 4 | Remover dead code (46 UI comps) | 🟠 Alta | Médio | Alto |
| 5 | Traduzir strings hardcoded | 🟠 Alta | Pequeno | Médio |
| 6 | `aria-current="page"` | 🟠 Alta | Pequeno | Médio |
| 7 | Labels acessíveis nos inputs | 🟠 Alta | Pequeno | Alto |
| 8 | Tipar `react-simple-maps` | 🟡 Média | Pequeno | Médio |
| 9 | Substituir `key={index}` | 🟡 Média | Pequeno | Baixo |
| 10 | Logging em `catch {}` vazios | 🟡 Média | Pequeno | Baixo |
| 11 | URLs canónicas absolutas | 🟡 Média | Pequeno | Médio |
| 12 | Contraste de cores | 🟡 Média | Médio | Médio |
| 13 | Configurar testes | 🟢 Baixa | Grande | Médio |
| 14 | Cache TopoJSON | 🟢 Baixa | Pequeno | Baixo |
| 15 | Ativar regras TS/ESLint | 🟢 Baixa | Médio | Médio |
| 16 | API para formulários | 🟢 Baixa | Grande | Alto |
| 17 | Monitoramento de erros | 🟢 Baixa | Médio | Médio |
| 18 | Remover `package-lock.json` | 🟢 Baixa | Pequeno | Baixo |

---

## Resumo

O projeto é um **site corporativo bem construído** visualmente, com design premium e boa estrutura de código. Os problemas principais são:

1. **Funcional:** Formulários não funcionam — sem submissão, sem validação, sem `name`. **O principal CTA do site está quebrado.**
2. **Performance:** ~1.5-2MB de JavaScript desnecessário devido a componentes shadcn/ui e dependências não utilizadas.
3. **Acessibilidade:** Múltiplas barreiras (falta de `aria-current`, labels, `aria-hidden`).
4. **Internacionalização:** Lacunas na cobertura de tradução PT.
5. **Qualidade:** Configuração permissiva de TS/ESLint permite acúmulo de dead code.
