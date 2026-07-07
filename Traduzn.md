PROMPT – Atualização Profissional do Sistema de Tradução (i18n): Substituir Kikongo por Lingala

Quero que atuues como um Principal Software Engineer, Senior Front-End Architect, Especialista em Internacionalização (i18n), Localization Engineer e Arquiteto de Software, com experiência em aplicações empresariais desenvolvidas com Next.js, React, TypeScript, Tailwind CSS e sistemas multilíngues de grande escala.

O teu objetivo é atualizar profissionalmente o sistema de tradução do projeto, substituindo o idioma Kikongo por Lingala, garantindo que o novo idioma seja integrado de forma completa, segura e consistente, sem alterar qualquer outra funcionalidade do sistema.

REGRAS OBRIGATÓRIAS
NÃO ALTERAR
Não alteres o layout do website.
Não alteres a interface do seletor de idiomas.
Não alteres a arquitetura do projeto.
Não alteres a lógica das restantes línguas.
Não alteres componentes que já funcionam corretamente.
Não alteres rotas.
Não alteres estilos globais.
Não alteres qualquer funcionalidade que não esteja relacionada com a internacionalização.

Todo o trabalho deve respeitar a estrutura existente do projeto.

Objetivo Principal

Substituir completamente o idioma Kikongo pelo idioma Lingala, fazendo com que este passe a funcionar exatamente como todas as outras línguas já existentes no sistema.

A experiência do utilizador deve ser idêntica à das restantes traduções, sem qualquer diferença de comportamento.

1. Atualização do Seletor de Idiomas

Localiza o componente responsável pelo botão ou menu de seleção de idiomas.

Efetua as seguintes alterações:

Remove o idioma Kikongo.
Adiciona Lingala na mesma posição.
Atualiza o nome apresentado ao utilizador.
Atualiza o código da língua utilizado pelo sistema (locale).
Atualiza a bandeira correspondente, caso exista.
Mantém exatamente o mesmo estilo visual e animações.
2. Integração Completa no Sistema de Tradução

Após adicionar Lingala, integra-o completamente no sistema de internacionalização.

Verifica todos os ficheiros e configurações relacionados com:

i18n
locales
dictionaries
translation files
middleware
providers
hooks
contextos
configuração de idiomas
carregamento dinâmico das traduções

O idioma deve ser reconhecido automaticamente pelo sistema.

3. Ativar Todas as Funcionalidades

O idioma Lingala deve possuir exatamente o mesmo comportamento das restantes línguas.

Ao ser selecionado, deve:

traduzir toda a interface;
atualizar menus;
traduzir títulos;
traduzir subtítulos;
traduzir botões;
traduzir formulários;
traduzir mensagens;
traduzir páginas;
traduzir componentes;
traduzir conteúdos dinâmicos;
traduzir o rodapé;
traduzir o cabeçalho;
traduzir textos institucionais.

Nenhum elemento deve permanecer no idioma anterior devido a configurações incompletas.

4. Estado Ativo

Quando o utilizador selecionar Lingala:

o botão deve ficar imediatamente em estado ativo;
apresentar o mesmo destaque visual utilizado pelas restantes línguas;
manter o idioma ativo durante toda a navegação;
preservar a escolha após atualizar a página;
respeitar o mecanismo atual de persistência (cookies, localStorage ou sistema existente).
5. Compatibilidade Total

Verifica toda a infraestrutura de internacionalização para garantir que:

não existem chaves de tradução em falta;
não existem erros de compilação;
não existem conflitos entre idiomas;
não existem traduções duplicadas;
não existem problemas de hidratação;
não existem erros de carregamento;
não existem referências ao antigo idioma Kikongo.

Caso existam referências remanescentes ao Kikongo, substitui-as corretamente por Lingala.

6. Qualidade da Tradução

Mantém a mesma estrutura utilizada pelas restantes línguas.

Respeita:

organização das chaves;
namespaces;
interpolações;
pluralizações;
variáveis dinâmicas;
formatação de datas;
números;
moedas;
mensagens condicionais.

Toda a implementação deve seguir o padrão já existente no projeto.

7. Código

Escreve código como um engenheiro principal.

Utiliza boas práticas de:

Next.js (App Router)
React
TypeScript
Tailwind CSS
Internacionalização (i18n)
Componentização reutilizável
Clean Architecture
SOLID
Alto desempenho
Código limpo
Escalabilidade
Manutenibilidade

Não cries código redundante.

Não alteres a arquitetura existente.

Testes e Validação

Antes de concluir a implementação, valida que:

Lingala aparece corretamente na lista de idiomas.
O idioma pode ser selecionado sem erros.
A tradução é aplicada imediatamente.
O idioma permanece ativo após recarregar a página.
Todas as páginas continuam funcionais.
As restantes línguas continuam a funcionar exatamente como antes.
Não existem regressões nem impactos noutras funcionalidades.
Resultado Esperado

O sistema de tradução deve continuar a funcionar exatamente como anteriormente, mas com Lingala totalmente integrado no lugar de Kikongo. O novo idioma deve comportar-se de forma idêntica às restantes línguas do projeto, com todas as funcionalidades de tradução, persistência, navegação e internacionalização plenamente operacionais. A implementação deve ser invisível para o utilizador final, preservando a identidade visual, a arquitetura e a estabilidade da aplicação, seguindo padrões de qualidade de software de nível empresarial.