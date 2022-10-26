<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    hasClickAway?: boolean;
  }>(),
  {
    hasClickAway: true,
  }
);

const emits = defineEmits(["update:modelValue"]);

const clickAway = () => {
  if (props.hasClickAway) emits("update:modelValue");
};
</script>

<template>
  <transition name="fade" appear>
    <div
      v-if="props.modelValue"
      class="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-black bg-opacity-30 transition-opacity dark:bg-opacity-50"
          aria-hidden="true"
          @click="clickAway()"
        />
        <span
          class="hidden sm:inline-block sm:h-screen align-middle"
          aria-hidden="true"
          >&#8203;</span
        >
        <transition name="pop" appear>
          <div
            class="relative inline-block transform rounded-md bg-white p-6 text-left transition-all dark:bg-dark-gray dark:text-white w-11/12 sm:max-w-md sm:p-8 align-middle"
          >
            <slot />
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>
