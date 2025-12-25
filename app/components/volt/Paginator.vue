<template>
  <Paginator
    unstyled
    :pt="theme"
    :pt-options="{
      mergeProps: ptViewMerge,
    }"
  >
    <template
      #container="{
        page,
        pageCount,
        pageLinks,
        changePageCallback,
        firstPageCallback,
        lastPageCallback,
        prevPageCallback,
        nextPageCallback,
      }"
    >
      <div class="flex flex-wrap items-center justify-center gap-2">
        <SecondaryButton text rounded :disabled="page === 0" @click="firstPageCallback">
          <template #icon>
            <AngleDoubleLeftIcon />
          </template>
        </SecondaryButton>
        <SecondaryButton text rounded :disabled="page === 0" @click="prevPageCallback">
          <template #icon>
            <AngleLeftIcon />
          </template>
        </SecondaryButton>
        <div class="hidden items-center justify-center gap-2 sm:flex">
          <SecondaryButton
            v-for="pageLink of pageLinks"
            :key="pageLink"
            :text="page + 1 !== pageLink"
            rounded
            :class="['h-10 min-w-10 shrink-0', { 'bg-highlight!': page + 1 === pageLink }]"
            @click="() => changePageCallback(pageLink - 1)"
            >{{ pageLink }}
          </SecondaryButton>
        </div>
        <SecondaryButton text rounded :disabled="page === pageCount! - 1" @click="nextPageCallback">
          <template #icon>
            <AngleRightIcon />
          </template>
        </SecondaryButton>
        <SecondaryButton text rounded :disabled="page === pageCount! - 1" @click="lastPageCallback">
          <template #icon>
            <AngleDoubleRightIcon />
          </template>
        </SecondaryButton>
      </div>
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </Paginator>
</template>

<script setup lang="ts">
import AngleDoubleLeftIcon from "@primevue/icons/angledoubleleft";
import AngleDoubleRightIcon from "@primevue/icons/angledoubleright";
import AngleLeftIcon from "@primevue/icons/angleleft";
import AngleRightIcon from "@primevue/icons/angleright";
import Paginator, { type PaginatorPassThroughOptions, type PaginatorProps } from "primevue/paginator";
import { ref } from "vue";
import SecondaryButton from "./SecondaryButton.vue";
import { ptViewMerge } from "./utils";

interface Props extends /* @vue-ignore */ PaginatorProps {}
defineProps<Props>();

const theme = ref<PaginatorPassThroughOptions>({
  root: `flex items-center justify-center flex-wrap py-2 px-4 rounded-md gap-1
        bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0`,
});
</script>
