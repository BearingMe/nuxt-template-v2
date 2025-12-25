# Nuxt 4 Style Guide

Exemplo:

```vue
<script setup lang="ts">
// 1. Auto-imports: ref, useRoute e useOrders são globais. Sem 'import from' aqui.
const route = useRoute()
const { updateOrder } = useOrders() 

// 2. Lógica delegada para composables
const orderId = route.params.uuid as string
const { data: order } = await useFetchOrder(orderId)

async function handleUpdate(payload: any) {
  await updateOrder(orderId, payload)
}
</script>

<template>
  <NuxtLayout name="admin">
    <OrderForm 
      :initial-data="order" 
      @submit="handleUpdate" 
    />
  </NuxtLayout>
</template>
```

### 1. Auto-imports

Nunca importe primitivas do Vue ou Nuxt manualmente. Se vir um import de vue ou #app para funções básicas, remova-o.

```vue
<script>
// ❌ INCORRETO
import { ref, computed } from 'vue'
import { useRoute } from '#app'

// ✅ CORRETO (Apenas use as funções diretamente)
const route = useRoute()
const count = ref(0)
</script>
```

### 2. Estrutura de Diretórios

Cada arquivo tem seu lugar sagrado. Não inventa.
- `/pages`: Apenas definição de rotas e orquestração de layouts.
- `/composables`: Toda lógica de estado ou negócio reutilizável.
- `/components`: Componentes de UI puros.

```sh
# ✅ Estrutura Nuxt 4
app/
├── components/   # Componentes de UI
├── composables/  # Lógica (ex: useAuth.ts)
├── pages/        # Rotas (ex: [uuid]/view.vue)
└── middleware/   # Guardas de rota
```

### 3. Nomenclatura de Composables

O nome do arquivo dos composables (hook do vue) dita o nome do import automático. Use sempre o nome do composable para o nome dos arquivos.

```vue
<script>
// composables/useUser.ts -> export const useUser = ...
// ✅ CORRETO
const { user } = useUser()

// ❌ INCORRETO
// Nada de pastas 'services' ou 'utils' para lógica de composables.
</script>
```

### 4. Roteamento REST

As páginas devem refletir ações explícitas sobre recursos para manter a URL previsível.

```sh
# Padrão REST nas Pages
pages/
└── products/
    ├── index.vue        # Listagem
    ├── create.vue       # Formulário de criação
    └── [id]/
        ├── view.vue     # Detalhes
        └── update.vue   # Edição
```