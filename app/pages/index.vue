<script setup lang="ts">
// Nuxt 4 auto-imports primitives, no generic imports needed.
</script>

<template>
  <div class="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-50 p-6 dark:bg-gray-950">
    <div
      class="pointer-events-none absolute -top-[10%] -left-[10%] h-96 w-96 rounded-full bg-emerald-500/20 blur-[100px]"
    />
    <div
      class="pointer-events-none absolute right-[10%] bottom-[10%] h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]"
    />

    <VoltCard
      class="relative z-10 w-full max-w-3xl border border-gray-200 shadow-2xl backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80"
    >
      <template #content>
        <div class="flex flex-col items-center gap-10 px-6 py-10 text-center md:px-12">
          <div class="relative flex items-center justify-center">
            <div class="absolute inset-0 animate-pulse rounded-full bg-emerald-500/20 blur-xl"></div>
            <div
              class="relative flex h-24 w-24 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-500/5"
            >
              <Icon name="lucide:rocket" class="text-5xl text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>

          <div class="flex max-w-lg flex-col gap-4">
            <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              Bem-vindo ao
              <span class="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">NxT</span>
            </h1>
            <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              O template definitivo para projetos Nuxt 4. Pré-configurado para
              <span class="font-medium text-gray-900 dark:text-gray-200">velocidade</span>,
              <span class="font-medium text-gray-900 dark:text-gray-200">escalabilidade</span> e
              <span class="font-medium text-gray-900 dark:text-gray-200">DX impecável</span>.
            </p>
          </div>

          <div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <VoltButton
              label="Começar Agora"
              nuxt-icon="lucide:zap"
              class="w-full font-semibold shadow-lg shadow-emerald-500/20 sm:w-auto"
            />
            <VoltSecondaryButton
              label="Ler Documentação"
              nuxt-icon="lucide:book-open"
              severity="secondary"
              outlined
              class="w-full bg-transparent hover:bg-gray-100 sm:w-auto dark:hover:bg-gray-800"
            />
          </div>

          <VoltDivider class="w-full max-w-xs opacity-50" />

          <div class="flex flex-col items-center gap-3">
            <span class="text-xs font-semibold tracking-widest text-gray-400 uppercase">Powered by</span>
            <div class="flex flex-wrap items-center justify-center gap-2">
              <VoltTag value="Nuxt 4" severity="success" class="rounded-full px-3" />
              <VoltTag value="Vue 3.5+" severity="info" class="rounded-full px-3" />
              <VoltTag value="TypeScript" severity="warn" class="rounded-full px-3" />
              <VoltTag value="Tailwind" severity="secondary" class="rounded-full px-3" />
              <VoltTag value="Vue Query" severity="contrast" class="rounded-full px-3" />
            </div>
          </div>
        </div>
      </template>
    </VoltCard>

    <div class="absolute bottom-4 text-xs text-gray-400 opacity-60">v0.0.3 • Architecture by Volt</div>
  </div>
</template>
