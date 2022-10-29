<script setup lang="ts">
import { useRoute } from "vue-router";
import KanbanService from "@/services/kanbanService";
import { onMounted, reactive } from "vue";
import type { KanbanBoard } from "@/types/kanbanBoard";
//@ts-ignore
// import Draggable from "vue3-draggable";

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
      <div v-for="column in state.board.Columns" :key="column.id">
        <div>
          <h1 class="flex items-center mb-6">
            <span
              class="w-4 h-4 rounded-full mr-2"
              :style="{ background: randomHex() }"
            />
            {{ column.name }} (420)
          </h1>
          <div class="w-72 p-6 bg-white">fake subtask</div>
          <!--        <draggable v-model="column.subtask">-->
          <!--          <template v-slot:item="{ item }">-->
          <!--            <div>-->
          <!--              {{ item }}-->
          <!--            </div>-->
          <!--          </template>-->
          <!--        </draggable>-->
        </div>
      </div>
    </div>
  </div>
</template>
