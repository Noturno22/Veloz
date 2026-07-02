# Prompt — Implementação Profissional da Página "About Us"

Você é um **Senior Staff Software Engineer**, especialista em **React, Next.js, TypeScript, Tailwind CSS, UI/UX, Design Systems, Arquitetura Front-End, Performance, SEO e Acessibilidade**.

Seu objetivo é **evoluir** a página **About Us** de um website corporativo de uma empresa internacional de commodities.

## Objetivo Principal

A página deve transmitir:

* Confiança
* Sofisticação
* Presença internacional
* Credibilidade
* Elegância
* Profissionalismo
* Institucionalidade

O resultado deve parecer desenvolvido por uma equipa de engenharia de empresas como Bloomberg, Maersk, Cargill, Glencore, Trafigura ou Vitol.

---

# REGRAS ABSOLUTAS

## NÃO alterar

* Não alterar o layout global.
* Não modificar Header.
* Não modificar Navbar.
* Não modificar Footer.
* Não alterar o sistema de cores existente.
* Não alterar tipografia existente.
* Não alterar componentes compartilhados.
* Não remover animações existentes.
* Não quebrar responsividade.
* Não modificar rotas.
* Não alterar APIs.
* Não alterar estado global.
* Não modificar autenticação.
* Não alterar configurações do projeto.

O objetivo é **harmonizar**, não redesenhar.

A implementação deve parecer que sempre fez parte do projeto.

---

# Antes de modificar qualquer código

Executar obrigatoriamente:

git branch --show-current

git fetch

git status

git log HEAD..origin/<branch> --oneline

Caso existam alterações remotas:

git pull

Resolver conflitos antes de qualquer modificação.

Jamais utilizar:

* git reset --hard
* git push --force
* comandos destrutivos

---

# Análise do Projeto

Antes de escrever código:

1. Entender a arquitetura existente.
2. Identificar Design System.
3. Identificar padrões de componentes.
4. Reutilizar componentes existentes.
5. Respeitar naming convention.
6. Respeitar ESLint.
7. Respeitar Prettier.
8. Não duplicar componentes.
9. Não criar código desnecessário.
10. Manter consistência com todo o projeto.

---

# Implementar na página About Us

## 1. Hero Institucional

Título elegante.

Subtítulo curto.

Imagem Hero.

Criar placeholder para imagem.

Exemplo:

/public/images/about/hero.jpg

Não inserir imagem real.

Apenas preparar estrutura.

Adicionar overlay elegante.

Adicionar animação suave.

---

## 2. Who We Are

Texto institucional.

Imagem lateral.

Placeholder:

/public/images/about/company.jpg

Layout responsivo.

---

## 3. Mission Vision Values

Cards elegantes.

Mission

Vision

Values

Cada card deve reutilizar os componentes existentes.

Hover discreto.

Shadow leve.

Bordas suaves.

---

## 4. Global Presence

Adicionar mapa estilizado.

Placeholder:

/public/images/about/world-map.svg

Texto explicativo.

Layout harmonioso.

---

## 5. Commodities

Grid elegante.

Cada item deve possuir espaço para imagem.

Placeholders:

Agriculture

/public/images/about/agriculture.jpg

Metals

/public/images/about/metals.jpg

Energy

/public/images/about/energy.jpg

Chemicals

/public/images/about/chemicals.jpg

Industrial Raw Materials

/public/images/about/raw-materials.jpg

---

## 6. Our Services

Grid institucional.

Cards reutilizando design existente.

Global Trading

International Sourcing

Logistics

Supply Chain

Import & Export

Risk Management

---

## 7. Why Choose Us

Cards com ícones.

Professional Team

Global Network

Integrity

Reliability

Compliance

Operational Excellence

---

## 8. Timeline

Fluxo horizontal elegante.

Supplier

↓

Inspection

↓

Documentation

↓

Shipping

↓

Delivery

↓

Client

---

## 9. ESG

Criar seção moderna.

Sustainability

Responsible Sourcing

Environmental Commitment

Ethical Business

Compliance

Adicionar placeholder:

/public/images/about/esg.jpg

---

## 10. Statistics

Preparar contadores animados.

Countries

Partners

Projects

Experience

Clients

Os valores devem ficar em constantes facilmente editáveis.

---

## 11. Certifications

Criar espaço para logos.

Não inserir imagens.

Somente placeholders.

ISO

SGS

Intertek

Bureau Veritas

---

## 12. CTA

Bloco premium.

Título.

Texto.

Botão Contact Us.

Botão Request Quote.

---

# Imagens

Criar estrutura preparada para futuras imagens.

Nunca usar links externos.

Nunca usar imagens temporárias.

Usar placeholders organizados.

Estrutura:

public/

images/

about/

hero.jpg

company.jpg

world-map.svg

agriculture.jpg

metals.jpg

energy.jpg

chemicals.jpg

raw-materials.jpg

esg.jpg

---

# Código

O código deve ser:

Modular

Limpo

Escalável

Tipado

Componentizado

Reutilizável

Performático

Sem duplicação

Seguindo SOLID

Seguindo Clean Code

Seguindo Clean Architecture

Seguindo boas práticas React/Next.js

---

# Performance

Lazy Loading

Code Splitting

Image Optimization

Memoization quando necessário

Sem re-renderizações desnecessárias

Sem código morto

---

# SEO

Heading hierarchy correta.

Meta preparada.

Alt em todas imagens.

Estrutura semântica.

Schema preparado se existir no projeto.

---

# Responsividade

Desktop

Laptop

Tablet

Mobile

Large Screens

Tudo deve funcionar perfeitamente.

---

# Acessibilidade

ARIA Labels

Keyboard Navigation

Contraste adequado

Focus States

Sem problemas Lighthouse.

---

# Finalização

Executar:

* Build
* Lint
* Type Check
* Testes existentes

Confirmar:

Projeto compila.

Nenhum erro.

Nenhum warning crítico.

Nenhum conflito.

Nenhum componente quebrado.

Nenhuma regressão visual.

---

# Entrega

Ao finalizar informar:

1. Resumo das alterações realizadas.

2. Lista completa dos arquivos modificados.

3. Arquivos novos criados.

4. Componentes reutilizados.

5. Componentes novos.

6. Sugestão de mensagem de commit.

Commit sugerido:

feat(about): enhance About Us page with premium corporate sections while preserving existing design system

IMPORTANTE:

A implementação deve ser praticamente indistinguível do restante website, mantendo o mesmo padrão visual, mesma linguagem de design, mesmas animações, mesma arquitetura e os mesmos componentes existentes. O utilizador deve perceber uma evolução natural da página, sem qualquer quebra de identidade visual ou estrutural.


# Continuação do Projeto — Integração Profissional de Imagens na Página About Us (Sem Alterar Layout)

Este é um **prompt de continuação** do projeto já existente.

Toda a arquitetura, identidade visual, layout, animações, componentes e Design System já foram aprovados.

**NÃO criar uma nova página.**
**NÃO redesenhar nenhuma seção.**
**NÃO alterar a identidade visual.**
**NÃO modificar o espaçamento.**
**NÃO alterar tipografia.**
**NÃO alterar cores.**
**NÃO alterar componentes compartilhados.**
**NÃO alterar Header, Navbar ou Footer.**

O único objetivo desta implementação é **ligar todas as áreas de imagens da página About Us a pastas locais**, permitindo que eu apenas copie novas imagens para essas pastas e elas apareçam automaticamente no website.

---

# Procedimento obrigatório antes de qualquer alteração

Executar obrigatoriamente:

```bash
git branch --show-current
git fetch
git status
git log HEAD..origin/<branch> --oneline
```

Caso existam alterações remotas:

```bash
git pull
```

Resolver todos os conflitos antes de modificar qualquer arquivo.

Nunca utilizar:

* git reset --hard
* git push --force
* comandos destrutivos

---

# Objetivo

Não modificar a estrutura visual da página.

Apenas substituir todas as imagens atuais por um sistema profissional que carregue automaticamente imagens a partir de pastas específicas.

A aparência final da página deve permanecer exatamente igual.

---

# Arquitetura Obrigatória

A implementação deve ser de nível empresarial.

Não utilizar arrays manuais de imagens.

Não utilizar listas fixas.

Não cadastrar imagens manualmente.

O sistema deve descobrir automaticamente todas as imagens existentes na pasta correspondente.

Caso o projeto utilize **Next.js**, implementar a descoberta de imagens utilizando a arquitetura recomendada para o framework (Server Components, `fs`/`path` ou API interna), evitando qualquer limitação do navegador para leitura de diretórios.

Toda essa lógica deve ficar encapsulada no componente ou serviço responsável.

---

# Sistema de Galeria Reutilizável

Criar ou evoluir um componente reutilizável chamado, por exemplo:

ImageGallery

Ele deverá receber apenas:

```tsx
folder="about/hero"
```

ou

```tsx
folder="about/company"
```

ou

```tsx
folder="about/agriculture"
```

Sem necessidade de informar nomes de arquivos.

O componente será responsável por localizar automaticamente todas as imagens da pasta.

---

# Áreas da página About Us

## Hero (imagem principal abaixo do título)

Substituir a imagem atual por uma galeria automática.

Pasta:

```text
public/images/about/hero/
```

Todas as imagens presentes nessa pasta devem ser exibidas automaticamente.

Troca automática.

Fade elegante.

Loop infinito.

Sem alterar dimensões.

Sem alterar layout.

Sem flicker.

Sem CLS.

---

## Quem Somos

Imagem lateral.

Pasta:

```text
public/images/about/company/
```

---

## Commodities

Agriculture

```text
public/images/about/agriculture/
```

Metals

```text
public/images/about/metals/
```

Energy

```text
public/images/about/energy/
```

Chemicals

```text
public/images/about/chemicals/
```

Raw Materials

```text
public/images/about/raw-materials/
```

Cada card deverá carregar automaticamente apenas as imagens da sua própria pasta.

---

## Global Presence

Caso exista imagem do mapa.

Utilizar:

```text
public/images/about/maps/
```

---

## ESG

Utilizar:

```text
public/images/about/esg/
```

---

## Futuras Seções

O sistema deve permitir criar facilmente novas galerias.

Exemplo:

```text
public/images/about/team/

public/images/about/offices/

public/images/about/clients/

public/images/about/partners/

public/images/about/ports/

public/images/about/warehouses/
```

Sem alterar nenhuma lógica.

Bastará utilizar:

```tsx
<ImageGallery folder="about/team" />
```

---

# Descoberta Automática

O sistema deverá localizar automaticamente:

.webp

.jpg

.jpeg

.png

.avif

Ordenar automaticamente por nome.

Exemplo:

01.webp

02.webp

03.webp

04.webp

05.webp

...

---

# Quando eu adicionar novas imagens

Exemplo:

Hoje:

```text
01.webp
02.webp
03.webp
```

Amanhã:

```text
04.webp
05.webp
06.webp
07.webp
```

O sistema deverá apresentar automaticamente essas novas imagens, sem necessidade de modificar qualquer código, arrays, configurações ou componentes.

---

# Caso a pasta esteja vazia

Nunca apresentar erro.

Nunca quebrar layout.

Mostrar placeholder institucional existente no projeto.

---

# Performance

Implementar:

* Lazy Loading
* Otimização de imagens
* Preload da próxima imagem
* Memoização
* Page Visibility API
* Intersection Observer
* Evitar re-renderizações
* Evitar vazamentos de memória
* Manter excelente desempenho no Lighthouse

---

# UX

As transições devem ser discretas e sofisticadas.

Fade suave.

Crossfade.

Zoom extremamente leve.

Sem animações exageradas.

Sem alterar o Design System.

---

# Responsividade

Garantir funcionamento perfeito em:

* Desktop
* Laptop
* Tablet
* Mobile
* UltraWide
* Retina Displays

---

# Acessibilidade

Gerar automaticamente:

* alt
* title
* aria-label

Sempre que possível com base no nome da pasta ou do arquivo.

---

# Compatibilidade

Toda a implementação deve reutilizar os componentes existentes.

Não duplicar código.

Seguir SOLID.

Seguir Clean Architecture.

Seguir Clean Code.

Baixo acoplamento.

Alta coesão.

---

# Validação Final

Antes de concluir:

* Confirmar que o projeto compila.
* Confirmar que não existem conflitos.
* Confirmar que nenhuma seção perdeu seu layout original.
* Confirmar que a identidade visual permanece exatamente igual.
* Confirmar que todas as galerias carregam automaticamente as imagens das suas respectivas pastas.
* Confirmar que basta copiar novas imagens para as pastas para que elas apareçam automaticamente.

---

# Entrega

Ao finalizar informar:

1. Resumo das alterações realizadas.
2. Lista dos arquivos modificados.
3. Componentes criados ou atualizados.
4. Estrutura final das pastas de imagens.
5. Como adicionar novas imagens no futuro.
6. Como criar uma nova galeria utilizando apenas uma nova pasta.
7. Sugestão de mensagem de commit.

Commit sugerido:

```text
feat(about): integrate automatic folder-based image galleries while preserving existing UI, layout and design system
```

## Objetivo Final

A página **About Us** deve permanecer visualmente idêntica à versão atual. A única diferença é que todas as áreas de imagens (hero, seções, cartões e futuras áreas) passam a estar ligadas a pastas locais. A partir desse momento, qualquer nova imagem adicionada à pasta correspondente deverá aparecer automaticamente na galeria, sem necessidade de editar código, mantendo um padrão de engenharia de software de nível empresarial, escalável, performático e de fácil manutenção.
