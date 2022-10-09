<script setup lang="ts">
import IconCross from "./icons/IconCross.vue";
import IconMinus from "./icons/IconMinus.vue";
import KanbanButton from "./KanbanButton.vue";
import KanbanInputText from "./KanbanInputText.vue";
import { ref } from "vue";

defineProps<{
  modelValue: Array<string>;
  label: string;
  placeholder: string;
  buttonText: string;
}>();

const emits = defineEmits(["update:modelValue", "remove", "add"]);

const update = (item: string, index: number) => {
  emits("update:modelValue", { item, index });
};

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
        v-for="(item, index) in modelValue"
        :key="index"
      >
        <KanbanInputText
          :placeholder="placeholder"
          :model-value="item"
          @enter="update($event, index)"
        />
        <IconCross
          class="mt-2 cursor-pointer"
          @click="emits('remove', index)"
        />
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
      <IconMinus
        class="mt-2 cursor-pointer"
        @click="
          addNewValue = false;
          newValue = '';
        "
      />
    </div>
    <KanbanButton
      class="mt-3"
      :text="buttonText"
      variant="secondary"
      @click="addNewValue = true"
    />
  </div>
</template>
