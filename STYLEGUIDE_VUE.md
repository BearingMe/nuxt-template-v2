# Vue 3 Style Guide

Exemplo:

```vue
<script setup lang="ts">
// 1. Macros
const props = defineProps<{
  userId: string
  label?: string
}>()

const model = defineModel<string>()
const emit = defineEmits(['save'])

// 2. Estado e Hooks
const usersStore = useUsers() // Composable camelCase
const isLoading = ref(false)
const upperLabel = computed(() => props.label?.toUpperCase())

// 3. Handlers
function handleSave() {
  emit('save', model.value)
}
</script>

<template>
  <div class="user-input-group">
    <label>{{ upperLabel }}</label>
    <input v-model="model" type="text" />
    <VoltButton 
      :loading="isLoading" 
      @click="handleSave" 
    />
  </div>
</template>
```

### 1. Ordem do Script Setup

Organize por "nível de autoridade" das APIs. Comece pelo que define o contrato do componente.

```vue
<script>
// 1. Definição do Contrato (Macros)
const props = defineProps<Props>()
const model = defineModel()

// 2. Lógica e Estado (Reatividade)
const count = ref(0)
const doubled = computed(() => count.value * 2)

// 3. Ciclo de vida e Efeitos (Side Effects)
onMounted(() => console.log('Pronto'))
</script>
```

### 2. Reatividade: Ref por padrão

Use `ref` para manter a consistência. `reactive` é exceção para objetos densos de formulário.

```vue
<script>
// ✅ CORRETO: Consistente e fácil de identificar no script (.value)
const name = ref('Aizen')
const age = ref(30)

// ⚠️ EXCEÇÃO: Apenas para agrupamentos lógicos inseparáveis
const form = reactive({
  email: '',
  password: ''
})
</script>
```

### 3. Nomenclatura de Componentes

Sempre use o nome da pasta pai para evitar conflitos de escopo no projeto.

```sh
components/
└── User/
    ├── UserCard.vue      // ✅ Correto (Contexto explícito)
    └── UserAvatar.vue    // ✅ Correto
```

### Templates: Self-closing e CamelCase

Mantenha o template limpo.

- Componentes Vue em PascalCase
- Componentes sem slot devem ser self-closing
- HTML sempre com fechamento explícito

```vue
<template>
  <UserCard :id="123" />
  <div></div>
</template>
```