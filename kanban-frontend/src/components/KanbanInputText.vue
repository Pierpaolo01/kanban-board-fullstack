<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    label?: string;
    name?: string;
    placeholder?: string;
    error?: string;
  }>(),
  {
    name: "",
    label: "",
    placeholder: "",
    error: "",
  }
);

const emits = defineEmits(["update:modelValue", "enter"]);

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
  <div class="flex flex-col space-y-2 w-full">
    <label class="text-dark-lines text-sm dark:text-white" for="kanban_input">
      {{ props.label }}
    </label>
    <div class="relative">
      <input
        :ref="`kanbanInput${name}`"
        class="rounded border w-full text-black text-p bg-white/0 text-black placeholder-black/25 placeholder-p px-4 py-2 dark:placeholder-gray-medium dark:text-white"
        :class="
          error && !!error.length
            ? 'border-red'
            : 'border-dark-lines/25 dark:border-light-lines/25'
        "
        :placeholder="props.placeholder"
        @keyup.enter="emits('enter', $event.target.value)"
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
