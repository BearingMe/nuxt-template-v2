# Arquitetura

Este projeto é intencionalmente opinativo.
Se algo não estiver definido aqui, siga o comportamento padrão do framework.

---

## Vue 3 (baseado no Vue Style Guide)

- Apenas Composition API.
- Sempre usar `<script setup lang="ts">`.
- Options API é proibida.

### Estrutura do Projeto
- Páginas representam rotas e contexto principal.
- Componentes são reutilizáveis e não conhecem rotas.
- Composables concentram lógica e estado compartilhado.

### Nomenclatura
- Páginas e pastas: `kebab-case`
- Componentes:
  - Nome em `PascalCase`
  - Devem usar o nome da pasta pai como prefixo para evitar colisões e deixar o contexto explícito
- Props: `camelCase`
- Composables: prefixo obrigatório `use`, seguido de nome claro e descritivo (`useUser`, `useFetchOrders`)

### Estrutura do Arquivo Vue
- Ordem das tags no arquivo:
  - `script`
  - `template`
  - `style`

### Organização do `script setup`
- Imports
- Tipagens e interfaces
- Macros do Vue: `defineProps`, `defineEmits`, `defineModel`
- Estado e derivados: `ref`, `computed`, `reactive`
- Reações e ciclo de vida: `watch`, `onMounted`, etc
- Funções auxiliares e handlers

### Reatividade
- Prefira `ref` por padrão.
- Use `reactive` apenas para estados fortemente acoplados.
- Nunca misture `ref` e `reactive` para o mesmo estado lógico.

### Macros
- Use `defineProps`, `defineEmits` e `defineModel` com TypeScript.
- Utilize `defineModel` exclusivamente para two-way data binding explícito.
- Prefira tipagem inline sempre que não houver reutilização fora do componente.
- Não crie wrappers, abstrações ou helpers em torno das macros do Vue.

### Regras de Template
- Componentes sem slots devem ser self-closing: `<Icon />`
- A regra não se aplica a:
  - Elementos HTML nativos
  - Componentes Vue em kebab-case

### Referências
- Vue Style Guide: https://vuejs.org/style-guide/

---

## Nuxt 4 (Regras Experimentais)

### Estrutura de Diretórios
- Siga estritamente a estrutura padrão do Nuxt.
- Se algo pertence a um diretório específico, ele deve estar lá. Sem exceções.

Diretórios principais:
- `/pages`: definição de rotas e layout de página
- `/layouts`: estruturas de layout reutilizáveis
- `/components`: componentes de UI
- `/composables`: lógica reutilizável e estado compartilhado
- `/plugins`: integração com bibliotecas externas
- `/middleware`: regras de navegação e proteção de rotas
- `/assets`: estilos e arquivos não processados
- `/public`: arquivos públicos estáticos

Nada de lógica jogada em `pages` porque “é mais rápido”.
Se parece um composable, vai para `/composables`.

### Auto-Imports
- Nunca importe manualmente primitivas do Vue ou do Nuxt.
- `ref`, `computed`, `watch`, `useFetch`, `useRoute`, `useState`, etc são auto-importados.
- Se existir `import { ref } from 'vue'`, está errado.
- Se vir imports desnecessários, reclame alto e corrija.

Imports manuais são permitidos apenas para:
- Bibliotecas externas
- Tipagens
- Código que não é auto-importado pelo Nuxt

### Composables
- Todo composable deve viver em `/composables`.
- O nome do arquivo define o nome do composable.
- Prefixo obrigatório `use`.

Exemplos válidos:
- `/composables/useUser.ts`
- `/composables/useAuth.ts`

Nada de composable escondido em `utils` ou `services`.

### Pages
- Pages seguem uma organização baseada em ações REST.
- Cada pasta representa um recurso.
- Cada arquivo representa uma ação explícita.

Estrutura padrão:
- `/pages/recurso/index.vue` → listagem
- `/pages/recurso/create.vue` → criação
- `/pages/recurso/[uuid]/view.vue` → visualização
- `/pages/recurso/[uuid]/update.vue` → atualização
- `/pages/recurso/[uuid]/delete.vue` → deleção

### Components
- Componentes não conhecem rotas.
- Componentes não chamam API diretamente.
- Componentes recebem dados por props e emitem eventos.

Se um component precisa de `useRoute`, provavelmente é uma page.

### Convenção Geral
- Confie nos auto-imports.
- Confie na estrutura.
- Lute contra a vontade de “organizar melhor que o Nuxt”.

### Referências
- Nuxt 4 Documentation: https://nuxt.com/docs/4.x/getting-started/introduction

---

## Volt

### Uso de Bibliotecas
- Prefira sempre componentes do **Volt**.
- **PrimeVue** só é permitido quando não existir componente equivalente no Volt.
- Nesses casos, gerar apenas **warning**, nunca erro, já que o Volt não cobre 100% dos componentes do PrimeVue.

Regras adicionais:
- Componentes do PrimeVue devem ser **importados manualmente**.
- PrimeVue **não é** registrado como plugin do Nuxt.
- Imports de Vue/Nuxt dentro dos componentes do Volt localizados em `app/components/volt` devem ser ignorados.

### Customização do Volt
- É permitido alterar componentes do Volt.
- A lógica padrão do componente não pode ser quebrada.
- Extensões de comportamento são permitidas.
- Modificações de estilo são totalmente permitidas.

Regras:
- Não remover nem alterar contratos públicos dos componentes.
- Não introduzir efeitos colaterais inesperados.
- Componentes do Volt não seguem as regras de prefixo de nomenclatura do Vue.

---

## Vue Query (@tanstack/vue-query)

- Toda comunicação com API deve passar por **@tanstack/vue-query**.
- É proibido acessar a API fora de queries ou mutations.
- Nenhum component ou page deve chamar API diretamente.

### Nomenclatura dos Hooks
- Seguir o padrão inspirado no Apollo.

Queries:
- `useRecurso` (singular) → entidade única
- `useRecursos` (plural) → listagens

Mutations:
- `useAcaoRecurso`

Exemplos válidos:
- `useUser`
- `useUsers`
- `useUserPost`
- `useCreateUser`
- `useUploadFile`

### Organização dos Hooks (Vue Query)

- Todos os hooks do Vue Query vivem obrigatoriamente na pasta `/api`.
- A organização segue o recurso da API.

Padrão principal:
- `/api/<recurso>/queries.ts`
- `/api/<recurso>/mutations.ts`

Sub-recursos são permitidos:
- `/api/<recurso>/<subrecurso>/queries.ts`
- `/api/<recurso>/<subrecurso>/mutations.ts`

Regras:
- A estrutura deve, sempre que possível, seguir um padrão RESTful inspirado na API consumida.
- Na prática, muitas APIs não seguem REST corretamente. Nestes casos, prevalece o bom senso do dev.
- Não force REST artificial só para “ficar bonito”.
- O objetivo é previsibilidade, não perfeição teórica.

---

## Arquitetura (Simplicidade Primeiro)

- Não utilizar classes.
- Não aplicar padrões orientados a objeto.
- Priorizar funções, composição e dados explícitos.

Ordem de decisão (do mais simples ao mais complexo):
1. Se for simples o suficiente, resolva com um **composable**.
2. Se envolver comunicação com API, use **queries/mutations**.
3. Se precisar compartilhar dados entre páginas, use **route params**.
4. Em último caso, por necessidade real de segurança ou persistência, use **Pinia**.

Regras:
- A prioridade é sempre a opção mais simples que resolve o problema.
- Se você pulou um nível, justifique.
- Se virou complexo demais, a abstração está errada.
