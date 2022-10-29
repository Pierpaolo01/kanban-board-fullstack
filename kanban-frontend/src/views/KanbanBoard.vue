<script setup lang="ts">
import { useRoute } from "vue-router";
import KanbanService from "@/services/kanbanService";
import { onMounted, reactive } from "vue";
import type { KanbanBoard } from "@/types/kanbanBoard";
import type { KanbanTask } from "@/types/kanbanTask";

const route = useRoute();

const state = reactive<{
  board: KanbanBoard | null;
}>({
  board: null,
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
        <div class="w-72">
          <h1 class="flex items-center mb-6">
            <span
              class="w-4 h-4 rounded-full mr-2"
              :style="{ background: randomHex() }"
            />
            {{ column.name }} (420)
          </h1>
          <!--          <draggable v-model="column.Tasks" class="w-72 h-72">-->
          <!--            <template v-slot:item="{ item }">-->
          <div
            class="w-72 p-6 bg-white"
            v-for="task in column.Tasks"
            :key="task.id"
            draggable="true"
            @dragstart="startDragEvent($event, task)"
          >
            {{ task.title }}
          </div>
          <!--            </template>-->
          <!--          </draggable>-->
        </div>
      </div>
    </div>
  </div>
</template>
