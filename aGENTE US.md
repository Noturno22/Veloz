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
