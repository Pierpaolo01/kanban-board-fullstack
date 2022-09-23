<script setup lang="ts">
withDefaults(
  defineProps<{
    isChecked: boolean;
    text: string;
  }>(),
  {}
);

const emits = defineEmits(["unCheck"]);
</script>

<template>
  <div
    class="flex items-center space-x-4 bg-light-mode p-3 rounded hover:bg-purple/25 dark:bg-dark-gray dark:hover:bg-purple/25"
  >
    <input
      class="h-4 w-4"
      type="checkbox"
      :checked="isChecked"
      @input="emits('unCheck')"
    />
    <span
      class="text-sm text-black dark:text-white"
      :class="isChecked ? 'line-through' : ''"
      >{{ text }}</span
    >
  </div>
</template>
