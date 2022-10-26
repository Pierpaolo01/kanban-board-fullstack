<script setup lang="ts">
import IconCross from "./icons/IconCross.vue";
import Iconplus from "./icons/IconPlus.vue";
import KanbanButton from "./KanbanButton.vue";
import KanbanInputText from "./KanbanInputText.vue";
import { ref, computed } from "vue";

const props = defineProps<{
  modelValue: Array<string>;
  label: string;
  placeholder: string;
  buttonText: string;
}>();

const emits = defineEmits(["update:modelValue", "remove", "add"]);

const gsModelValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});

const addNewValue = ref(false);
const newValue = ref("");
</script>

<template>
  <div>
    <div>
      <label class="text-dark-lines text-sm dark:text-white">
        {{ label }}
      </label>
      <div
        class="flex items-center justify-between space-x-4 space-y-3"
        v-for="(_, index) in gsModelValue"
        :key="index"
      >
        <KanbanInputText
          :placeholder="placeholder"
          v-model="gsModelValue[index]"
          @enter="gsModelValue[index] = $event"
        />
        <button class="flex items-center" @click="emits('remove', index)">
          <span> Remove </span>
          <IconCross class="ml-2 cursor-pointer" />
        </button>
      </div>
    </div>
    <div
      v-if="addNewValue"
      class="flex items-center justify-between space-x-4 mb-3"
    >
      <KanbanInputText
        name="NewColumn"
        :placeholder="placeholder"
        v-model="newValue"
        @enter="
          emits('add', newValue);
          addNewValue = false;
          newValue = '';
        "
      />
      <button
        class="flex items-center"
        @click="
          emits('add', newValue);
          addNewValue = false;
          newValue = '';
        "
      >
        <span> Add </span>
        <Iconplus class="ml-2 cursor-pointer" />
      </button>
    </div>
    <KanbanButton
      class="mt-3"
      :text="buttonText"
      variant="secondary"
      @click="addNewValue = true"
    />
  </div>
</template>
