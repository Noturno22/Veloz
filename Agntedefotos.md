Prompt Profissional

Atua como um Engenheiro de Software Staff/Senior, especialista em React, Next.js, TypeScript, arquitetura frontend, otimização de assets e aplicações corporativas de grande escala.

O objetivo desta tarefa é preservar integralmente a estrutura, design, animações, responsividade, SEO, componentes, estilos, lógica de negócio e comportamento atual do sistema, realizando apenas uma melhoria arquitetural na origem das imagens apresentadas no Hero/Header de cada página.

Objetivo

Todas as páginas do site possuem uma secção imediatamente abaixo do cabeçalho (Hero/Banner/Header Section) onde atualmente já existe uma imagem ou slideshow.

Não alteres absolutamente nada nesta secção, exceto a origem das imagens.

A partir desta implementação, cada página deverá carregar automaticamente as imagens da sua respetiva pasta localizada em:

src/assets/IMG/

seguindo exatamente este mapeamento:

Página Análises
→ src/assets/IMG/Analises/

Página Contacto
→ src/assets/IMG/Contacto/

Página Parcerias
→ src/assets/IMG/Parcerias/

Página Commodities
→ src/assets/IMG/Commodites/

Caso existam outras páginas que utilizem o mesmo componente Hero, implementar o mesmo padrão para facilitar futuras expansões.

Requisitos Técnicos
Não modificar qualquer componente visual.
Não alterar o HTML existente.
Não alterar classes Tailwind.
Não alterar CSS.
Não alterar animações.
Não alterar espaçamentos.
Não alterar responsividade.
Não alterar efeitos.
Não alterar SEO.
Não alterar rotas.
Não alterar textos.
Não alterar traduções.
Não alterar estados existentes.
Não alterar a lógica de negócio.
Não remover qualquer funcionalidade existente.

A única alteração permitida é substituir a origem das imagens atualmente utilizadas pelas imagens provenientes das respetivas pastas.

Implementação Esperada

Criar uma solução reutilizável e escalável.

Caso exista um componente Hero comum, torná-lo parametrizável através de uma propriedade como:

imageFolder="Analises"

ou

page="Analises"

e fazer com que o componente descubra automaticamente todas as imagens existentes nessa pasta.

Utilizar uma abordagem moderna e robusta para carregamento dinâmico de assets (por exemplo import.meta.glob, require.context ou estratégia equivalente compatível com o framework utilizado), evitando imports manuais de cada imagem.

Carregamento das Imagens

O componente deverá:

localizar automaticamente todas as imagens da pasta correspondente;
ordenar os ficheiros por nome;
aceitar .png, .jpg, .jpeg, .webp e .svg;
ignorar ficheiros inválidos;
continuar funcional mesmo quando forem adicionadas novas imagens à pasta.

Não deverá ser necessário editar código para adicionar novas imagens futuramente.

Compatibilidade

A implementação deverá manter compatibilidade com:

React
Next.js
TypeScript
Vite (caso aplicável)
Lazy Loading
Tree Shaking
Code Splitting
Performance Optimization
Performance

Garantir:

lazy loading;
preload apenas da primeira imagem;
carregamento otimizado;
ausência de re-renderizações desnecessárias;
preservação da performance Lighthouse.
Resultado Esperado

Depois da implementação:

A página Análises deverá apresentar automaticamente as imagens existentes em:
src/assets/IMG/Analises/
A página Contacto deverá apresentar automaticamente:
src/assets/IMG/Contacto/
A página Parcerias deverá apresentar automaticamente:
src/assets/IMG/Parcerias/
A página Commodities deverá apresentar automaticamente:
src/assets/IMG/Commodites/

mantendo exatamente o mesmo comportamento visual, efeitos, slideshow (caso exista), animações e experiência do utilizador.

Restrições Obrigatórias

É expressamente proibido:

modificar layouts;
alterar qualquer componente visual;
alterar estilos;
alterar lógica existente;
alterar rotas;
alterar animações;
alterar a estrutura da página.

A implementação deverá limitar-se exclusivamente a substituir a origem das imagens atualmente utilizadas, criando uma solução modular, reutilizável, escalável e preparada para futuras páginas, seguindo padrões de engenharia de software de nível enterprise.