<script setup lang="ts">
import KanbanInputTextArea from "../KanbanInputTextArea.vue";
import KanbanInputText from "../KanbanInputText.vue";
import { onMounted, reactive } from "vue";
import KanbanDropdown from "../../components/KanbanDropdown.vue";
import KanbanButton from "../../components/KanbanButton.vue";
import type { KanbanColumn } from "@/types/kanbanColumn";
import type { KanbanTask, Subtask } from "@/types/kanbanTask";
import KanbanService from "@/services/kanbanService";
import type { KanbanBoard } from "@/types/kanbanBoard";
import { useNotification } from "@kyvg/vue3-notification";
import { useLoading } from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
const loader = useLoading();

const { notify } = useNotification();

const props = withDefaults(
  defineProps<{
    type?: "create" | "update";
    board: KanbanBoard;
    task?: KanbanTask;
  }>(),
  {
    type: "create",
  }
);

const emits = defineEmits(["close"]);

const form = reactive<{
  title: string;
  description: string;
  subtasks: Array<Subtask>;
  column: KanbanColumn;
}>({
  title: "",
  description: "",
  subtasks: [],
  column: props.board.Columns[0],
});

const createTask = async () => {
  loader.show();
  try {
    await KanbanService.addTask(props.board.id, form);
    emits("close");
    notify({
      type: "success",
      title: "Successfully added task",
    });
  } catch {
    notify({
      type: "error",
      title: "Something went wrong creating task",
    });
  } finally {
    loader.hide();
  }
};

const updateTask = async () => {
  loader.show();
  try {
    await KanbanService.updateTask(props.board.id, props.task!.id, form);
    emits("close");
    notify({
      type: "success",
      title: "Successfully updated task",
    });
  } catch (e) {
    notify({
      type: "error",
      title: "Something went wrong updating task",
    });
  } finally {
    loader.hide();
  }
};

onMounted(() => {
  if (props.task && props.type === "update") {
    form.title = props.task.title;
    form.description = props.task.description;
    form.subtasks = props.task.subtasks;
  }
});
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
    <div>
      <label class="text-dark-lines text-sm dark:text-white"> Subtasks </label>
      <div
        v-for="(subtask, index) in form.subtasks"
        :key="index"
        class="flex justify-between items-center space-x-4"
      >
        <KanbanInputText v-model="subtask.name" />
        <button
          @click="form.subtasks.splice(index, 1)"
          class="text-red text-sm text-center hover:underline"
        >
          Delete
        </button>
      </div>
      <KanbanButton
        class="mt-4"
        text="Add subtask"
        variant="secondary"
        @click="form.subtasks.push({ name: '', isDone: false })"
      />
    </div>
    <kanban-dropdown
      :selected-text="form.column.name"
      label="Status"
      v-if="type === 'create'"
    >
      <ul>
        <li
          v-for="column in board.Columns"
          :key="column.id"
          @click="form.column = column"
        >
          {{ column.name }}
        </li>
      </ul>
    </kanban-dropdown>
    <KanbanButton
      :text="type === 'create' ? 'Create task' : 'Edit task'"
      @click="type === 'create' ? createTask() : updateTask()"
    />
  </div>
</template>
