<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    label?: string;
    name?: string;
    placeholder?: string;
    error?: string;
    type?: "text" | "password";
  }>(),
  {
    name: "",
    label: "",
    placeholder: "",
    error: "",
    type: "text",
  }
);

const emits = defineEmits(["update:modelValue", "enter"]);

const keypressEnter = (event: any) => {
  emits("enter", (event.target as HTMLInputElement).value);
};

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
    <label class="text-dark-lines text-sm dark:text-white">
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
        @keyup.enter="keypressEnter($event.target)"
        :type="type"
        v-model="gsModelValue"
      />
      <span v-if="props.error" class="text-red">
        {{ props.error }}
      </span>
    </div>
  </div>
</template>
