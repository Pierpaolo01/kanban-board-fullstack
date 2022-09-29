<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  label?: string;
  selectedText: string;
}>();

const showDropdown = ref(false);
</script>

<template>
  <div class="flex flex-col space-y-2 relative">
    <label class="text-black text-sm dark:text-white">
      {{ label }}
    </label>
    <div
      class="rounded border p-3 rounded border text-black dark:text-white border-dark-lines cursor-pointer dark:border-light-lines px-4 py-2"
      @click="showDropdown = !showDropdown"
    >
      {{ selectedText }}
    </div>
    <div
      v-if="showDropdown"
      class="bg-light-mode dark:bg-dark-gray rounded"
      @click="showDropdown = !showDropdown"
    >
      <slot name="dropdown-options" />
    </div>
  </div>
</template>

<style scoped>
:deep(li) {
  @apply text-black hover:bg-purple/25 dark:bg-dark-gray p-4 cursor-pointer;
}
</style>
