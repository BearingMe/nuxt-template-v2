<script setup lang="ts">
import ButtonPrimary from "~/volt/ButtonPrimary.vue";
import ButtonSecondary from "~/volt/ButtonSecondary.vue";
import ButtonTertiary from "~/volt/ButtonTertiary.vue";
</script>

<template>
  <div class="flex flex-col w-[150px]">
    <ButtonPrimary>Click Me</ButtonPrimary>
    <ButtonSecondary>No, Click Me </ButtonSecondary>
    <ButtonTertiary>Shut up</ButtonTertiary>
  </div>
</template>
