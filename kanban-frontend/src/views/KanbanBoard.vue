<script setup lang="ts">
import { useRoute } from "vue-router";
import KanbanService from "@/services/kanbanService";
import { onMounted, reactive } from "vue";
import type { KanbanBoard } from "@/types/kanbanBoard";
import type { KanbanTask } from "@/types/kanbanTask";
import KanbanModal from "@/components/modals/KanbanModal.vue";
import KanbanViewDetailedTask from "@/components/modals/KanbanViewDetailedTask.vue";
import IconEdit from "@/components/icons/IconEdit.vue";
import KanbanModalCreateUpdateTask from "@/components/modals/KanbanModalCreateUpdateTask.vue";

const route = useRoute();

const state = reactive<{
  board: KanbanBoard | null;
  detailedTask: KanbanTask | null;
  showEditTaskModal: boolean;
}>({
  board: null,
  detailedTask: null,
  showEditTaskModal: false,
});

const fetchBoard = async () => {
  try {
    const response = await KanbanService.getBoard(String(route.params.boardId));
    state.board = response.data.data;
  } catch (e) {
    console.log(e);
  }
};

const startDragEvent = (event: any, task: KanbanTask) => {
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("taskId", String(task.id));
};

const onDropEvent = (event: any, columnId: number) => {
  const taskId = event.dataTransfer.getData("taskId");
  moveTask(taskId, columnId);
};

const moveTask = async (taskId: number, newColumnId: number) => {
  try {
    await KanbanService.moveTask(state.board!.id, taskId, newColumnId);
    await fetchBoard();
  } catch (e) {
    console.log(e);
  }
};

const randomHex = () => {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;
};

onMounted(async () => fetchBoard());
</script>

<template>
  <div class="overflow-x-auto">
    <div
      v-if="state.board"
      class="flex space-x-12 text-gray-medium max-w-[0px] pb-6"
    >
      <div
        v-for="column in state.board.Columns"
        :key="column.id"
        @drop="onDropEvent($event, column.id)"
        @dragenter.prevent
        @dragover.prevent
      >
        <div class="w-72 space-y-4">
          <h1 class="flex items-center mb-6">
            <span
              class="w-4 h-4 rounded-full mr-2"
              :style="{ background: randomHex() }"
            />
            {{ column.name }} ({{ column.Tasks.length }})
          </h1>

          <div
            class="p-6 bg-white rounded-lg shadow-lg relative"
            v-for="task in column.Tasks"
            :key="task.id"
            draggable="true"
            @dragstart="startDragEvent($event, task)"
          >
            <IconEdit
              @click.self="state.showEditTaskModal = !state.showEditTaskModal"
              class="absolute top-4 right-4 w-4 h-4 cursor-pointer"
            />
            <p
              class="text-md text-black mb-2 cursor-pointer"
              @click="state.detailedTask = task"
            >
              {{ task.title }}
            </p>
            <span class="text-sm">
              {{ task.subtasks.filter((sub) => sub.isDone === true).length }}/{{
                task.subtasks.length
              }}
              of subtasks
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <KanbanModal
    :model-value="!!state.detailedTask"
    @update:modelValue="state.detailedTask = null"
    :has-click-away="true"
  >
    <KanbanViewDetailedTask
      v-model="state.detailedTask"
      @refreshBoard="fetchBoard"
    />
  </KanbanModal>

  <KanbanModal v-model="state.showEditTaskModal" :has-click-away="true">
    <KanbanModalCreateUpdateTask v-model="state.detailedTask" />
  </KanbanModal>
</template>
