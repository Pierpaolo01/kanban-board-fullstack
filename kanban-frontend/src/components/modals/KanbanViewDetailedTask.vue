<script setup lang="ts">
import type { KanbanTask } from "@/types/kanbanTask";
import KanbanSubtask from "@/components/KanbanSubtask.vue";
import { reactive, watch } from "vue";
import cloneDeep from "lodash.clonedeep";
import KanbanService from "@/services/kanbanService";

const props = defineProps<{
  modelValue: KanbanTask;
}>();

const state = reactive<{
  task: KanbanTask;
}>({
  task: cloneDeep(props.modelValue),
});

const emits = defineEmits(["refreshBoard"]);

watch(
  () => state.task.subtasks,
  async () => {
    try {
      await KanbanService.updateSubtask(state.task.id, state.task.subtasks);
      emits("refreshBoard");
    } catch (e) {
      console.log(e);
    }
  },
  { deep: true }
);
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-lg">
      {{ modelValue.title }}
    </h1>
    <p class="text-p">
      {{ modelValue.description }}
    </p>
    <div>
      <label class="text-dark-lines text-sm dark:text-white mb-4">
        Subtasks
        {{ state.task.subtasks.filter((sub) => sub.isDone === true).length }} of
        {{ state.task.subtasks.length }}
      </label>

      <KanbanSubtask
        v-for="(subtask, index) in state.task.subtasks"
        :key="index"
        class="my-2"
        :text="subtask.name"
        :is-checked="subtask.isDone"
        @toggle="subtask.isDone = !subtask.isDone"
      />
    </div>
  </div>
</template>
