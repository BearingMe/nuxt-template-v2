<template>
  <Button
    unstyled
    :pt="theme"
    :pt-options="{
      mergeProps: ptViewMerge,
    }"
  >
    <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </Button>
</template>

<script setup lang="ts">
import Button, {
  type ButtonPassThroughOptions,
  type ButtonProps,
} from "primevue/button";
import { ref } from "vue";
import { ptViewMerge } from "./utils";

interface Props extends /* @vue-ignore */ ButtonProps {}
defineProps<Props>();

const theme = ref<ButtonPassThroughOptions>({
  root: `inline-flex cursor-pointer select-none items-center justify-center overflow-hidden relative
        px-3 py-2 gap-2 rounded-md disabled:pointer-events-none disabled:opacity-60 transition-colors duration-200
        bg-secondary enabled:hover:bg-secondary-emphasis enabled:active:bg-secondary-emphasis-alt text-secondary-contrast
        border border-secondary enabled:hover:border-secondary-emphasis enabled:active:border-secondary-emphasis-alt
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-secondary
        p-vertical:flex-col p-fluid:w-full p-fluid:p-icon-only:w-10
        p-icon-only:w-10 p-icon-only:px-0 p-icon-only:gap-0
        p-icon-only:p-rounded:rounded-full p-icon-only:p-rounded:h-10
        p-small:text-sm p-small:px-[0.625rem] p-small:py-[0.375rem]
        p-large:text-[1.125rem] p-large:px-[0.875rem] p-large:py-[0.625rem]
        p-raised:shadow-sm p-rounded:rounded-[2rem]
        p-outlined:bg-transparent enabled:hover:p-outlined:bg-secondary-50 enabled:active:p-outlined:bg-secondary-100
        p-outlined:border-secondary-200 enabled:hover:p-outlined:border-secondary-200 enabled:active:p-outlined:border-secondary-200
        p-outlined:text-secondary enabled:hover:p-outlined:text-secondary enabled:active:p-outlined:text-secondary
        dark:p-outlined:bg-transparent dark:enabled:hover:p-outlined:bg-secondary/5 dark:enabled:active:p-outlined:bg-secondary/15
        dark:p-outlined:border-secondary-700 dark:enabled:hover:p-outlined:border-secondary-700 dark:enabled:active:p-outlined:border-secondary-700
        dark:p-outlined:text-secondary dark:enabled:hover:p-outlined:text-secondary dark:enabled:active:p-outlined:text-secondary
        p-text:bg-transparent enabled:hover:p-text:bg-secondary-50 enabled:active:p-text:bg-secondary-100
        p-text:border-transparent enabled:hover:p-text:border-transparent enabled:active:p-text:border-transparent
        p-text:text-secondary enabled:hover:p-text:text-secondary enabled:active:p-text:text-secondary
        dark:p-text:bg-transparent dark:enabled:hover:p-text:bg-secondary/5 dark:enabled:active:p-text:bg-secondary/15
        dark:p-text:border-transparent dark:enabled:hover:p-text:border-transparent dark:enabled:active:p-text:border-transparent
        dark:p-text:text-secondary dark:enabled:hover:p-text:text-secondary dark:enabled:active:p-text:text-secondary
    `,
  loadingIcon: `animate-spin`,
  icon: `p-right:order-1 p-bottom:order-2`,
  label: `font-medium p-icon-only:invisible p-icon-only:w-0
        p-small:text-sm p-large:text-[1.125rem]`,
  pcBadge: {
    root: `min-w-4 h-4 leading-4 bg-secondary-contrast rounded-full text-secondary text-xs font-bold`,
  },
});
</script>
