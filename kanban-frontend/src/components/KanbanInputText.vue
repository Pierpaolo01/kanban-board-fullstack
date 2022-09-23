<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue: string;
  label: string;
  placeholder: string;
  error: string;
}>();

const emits = defineEmits(["update:modelValue"]);

const gsModelValue = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emits("update:modelValue", value);
  },
});
</script>

<template>
  <div class="flex flex-col space-y-2">
    <label class="text-dark-lines text-sm dark:text-white" for="kanban_input">
      {{ props.label }}
    </label>
    <div class="relative">
      <input
        class="rounded border w-full text-black text-p bg-white/0 text-black placeholder-black/25 placeholder-p px-4 py-2 dark:placeholder-gray-medium dark:text-white"
        :class="
          error && !!error.length
            ? 'border-red'
            : 'border-dark-lines dark:border-light-lines'
        "
        :placeholder="props.placeholder"
        type="text"
        id="kanban_input"
        v-model="gsModelValue"
      />
      <span v-if="props.error" class="text-red">
        {{ props.error }}
      </span>
    </div>
  </div>
</template>
