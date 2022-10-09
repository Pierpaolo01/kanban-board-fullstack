<script setup lang="ts">
import KanbanInputTextArea from "../KanbanInputTextArea.vue";
import KanbanInputText from "../KanbanInputText.vue";
import KanbanMultipleInputs from "../../components/KanbanMultipleInputs.vue";
import { reactive, ref } from "vue";
import KanbanDropdown from "../../components/KanbanDropdown.vue";
import KanbanButton from "../../components/KanbanButton.vue";

withDefaults(defineProps<{ modelValue: any; type?: "create" | "update" }>(), {
  type: "create",
});

const boardStatuses = ref<Array<string>>(["todo", "done"]);

const form = reactive<{
  title: string;
  description: string;
  subtasks: Array<string>;
  status: string;
}>({
  title: "",
  description: "",
  subtasks: [],
  status: boardStatuses.value[0],
});

const updateSubtasks = ({ item, index }: { item: string; index: number }) => {
  form.subtasks[index] = item;
};
</script>

<template>
  <div class="flex flex-col space-y-6 text-black dark:text-white">
    <h1 class="text-lg">
      {{ type === "create" ? "Add New Task" : "Edit Task" }}
    </h1>
    <KanbanInputText
      label="Title"
      placeholder="e.g. Take coffee break"
      v-model="form.title"
    />
    <KanbanInputTextArea
      label="Description"
      placeholder="e.g. It's always good to take a coffee break. This 15minute break will recharge the batteries a little"
      v-model="form.description"
    />
    <KanbanMultipleInputs
      :model-value="form.subtasks"
      label="Subtasks"
      placeholder="e.g. Get coffee"
      button-text="+ add new subtask"
      @update:modelValue="updateSubtasks($event)"
      @add="form.subtasks.push($event)"
      @remove="form.subtasks.slice($event, 1)"
    />
    <kanban-dropdown :selected-text="form.status" label="Status">
      <ul>
        <li
          v-for="status in boardStatuses"
          :key="status"
          @click="form.status = status"
        >
          {{ status }}
        </li>
      </ul>
    </kanban-dropdown>
    <KanbanButton :text="type === 'create' ? 'Create task' : 'Edit task'" />
  </div>
</template>
