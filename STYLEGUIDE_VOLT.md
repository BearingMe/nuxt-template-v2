# Volt Style Guide

Exemplo:

```vue
<script setup lang="ts">
// 1. Componente Volt: Auto-importado e customizável em app/components/volt
// 2. Fallback PrimeVue: Importe manual caso não exista no Volt
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const props = defineProps<{
  items: any[]
}>()
</script>

<template>
  <div class="container">
    <VoltCard title="Relatório Geral">
      
      <DataTable :value="items">
        <Column field="name" header="Nome" />
      </DataTable>

    </VoltCard>
  </div>
</template>
```

### 1. Escolha de Componentes

Sempre verifique a disponibilidade no Volt antes de recorrer ao PrimeVue.
- **Prioridade 1**: Componentes do diretório `app/components/volt`.
- **Prioridade 2**: Componentes do PrimeVue com importação manual.
- **Nota**: O uso de PrimeVue gera warning, mas não bloqueia o build.

### 2. Customização (Hacking Volt)

Você tem liberdade para ajustar os componentes dentro de `app/components/volt`, desde que mantenha a integridade original.
- **Estilos**: Modificações de CSS/Tailwind são totalmente permitidas.
- **Lógica**: Extensões são permitidas, mas nunca remova ou altere os contratos (props/events) originais.
- **Exceção**: Regras de prefixo de nomenclatura do Vue e proibição de imports manuais não se aplicam aos arquivos dentro da pasta `volt`.

### 3. Integração PrimeVue

O PrimeVue deve ser tratado como uma biblioteca externa bruta, sem integração automática com o Nuxt.
- **Sem Plugin**: O PrimeVue não deve ser registrado como plugin global do Nuxt.
- **Import Manual**: Todo componente PrimeVue deve ser importado explicitamente no `<script>` onde for usado.