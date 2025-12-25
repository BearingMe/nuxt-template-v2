<template>
  <div class="relative inline-flex">
    <slot />
    <Badge
      v-bind="$attrs"
      class="outline-surface-0 dark:outline-surface-900 absolute end-0 top-0 m-0 origin-[100%_0] translate-x-[50%] translate-y-[-50%] outline-2"
    />
  </div>
</template>

<script setup lang="ts">
import type { BadgeProps } from "primevue/badge";
import Badge from "./Badge.vue";

interface Props extends /* @vue-ignore */ BadgeProps {}
defineProps<Props>();

defineOptions({
  inheritAttrs: false,
});
</script>
