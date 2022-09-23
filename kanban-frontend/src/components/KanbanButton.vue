<script setup lang="ts">
interface propType {
  text: string;
  variant: "primary-large" | "primary" | "secondary" | "destructive";
}

const props = withDefaults(defineProps<propType>(), {
  variant: "primary",
});
</script>

<template>
  <button class="rounded-full text-white font-bold" :class="props.variant">
    {{ props.text }}
  </button>
</template>

<style scoped>
.primary-large {
  @apply py-4 px-5 bg-purple hover:bg-purple-hover text-md dark:bg-white;
}

.primary {
  @apply py-2.5 px-5 bg-purple hover:bg-purple-hover text-sm;
}

.secondary {
  @apply py-2.5 px-5 bg-purple/10 text-purple hover:bg-purple/25 text-sm text-purple dark:bg-white dark:hover:bg-white;
}

.destructive {
  @apply py-2.5 px-5 bg-red hover:bg-red-hover text-sm;
}
</style>
