# Arquitetura

Este projeto é **estritamente opinativo**. Na ausência de uma definição aqui, siga o comportamento padrão do framework.

---

### 🟢 1. Vue 3 & TypeScript
- **Paradigma**: Uso exclusivo de Composition API e `<script setup lang="ts">`. Options API é proibida.
- **Reatividade**: Use `ref` por padrão. `reactive` apenas para estados densos e fortemente acoplados.
- **Macros**: Use `defineModel` para sincronização de campos (two-way binding); para o restante, use props unidirecionais.
- **Nomenclatura**: 
  - Componentes: `PascalCase` com prefixo da pasta pai.
  - Composables: `camelCase` com prefixo use.
  - Pages/Pastas: `kebab-case`.

### 🚀 2. Nuxt 4 & Estrutura
- **Diretórios**: Siga a estrutura padrão. Lógica de negócio reutilizável `/composables`, nunca em `/pages`.
- **Auto-imports**: Proibido importar manualmente primitivas do Vue/Nuxt (`ref`, `useFetch`, etc).
- **Roteamento** REST: /pages seguem a convenção: `index` (lista), `create`, `[uuid]/view`, `[uuid]/update` e `[uuid]/delete`.

### 🔌 3. Comunicação & API (Vue Query)
- **Fluxo**: Toda comunicação externa deve usar `@tanstack/vue-query`. Componentes e pages não chamam API diretamente.
- **Localização**: Centralizar hooks em `/api/<recurso>/queries.ts` e `/api/<recurso>/mutations.ts`.
- **Hooks**: `useRecurso` (singular), `useRecursos` (plural) e `useAcaoRecurso` (mutations).

### 💅 4. UI & Design System (Volt)
- **Componentização**: Priorize componentes **Volt**. **PrimeVue** é fallback com import manual.
- **Compound Components**: Preferência por slots e scoped slots para evitar prop drilling e manter componentes desacoplados de rotas.
- **Pureza**: Componentes de UI não conhecem rotas ou chamam APIs; recebem dados e emitem eventos.

### 🧠 5. Princípios de Design (Simplicidade)
- **Funcional**: Proibido o uso de classes ou padrões orientados a objeto. Priorize funções e composição.
- **Escada de Decisão**: Resolva na ordem: Composable → Vue Query → Route Params → Pinia (último caso).
- **Pragmatismo**: O objetivo é previsibilidade. Se a abstração gera fricção, simplifique.

### Referências
- **Vue 3 Style Guide**: https://vuejs.org/style-guide/
- **Nuxt 4 Documentation**: https://nuxt.com/docs/4.x/getting-started/introduction
- **Vue Query Documentation**: https://tanstack.com/query/latest/docs/framework/vue/overview
- **Apollo Client Documentation**: https://www.apollographql.com/docs/react