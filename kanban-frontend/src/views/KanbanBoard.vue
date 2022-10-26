<script setup lang="ts">
import { useRoute } from "vue-router";
import KanbanService from "@/services/kanbanService";
import { onMounted, reactive } from "vue";
import type { KanbanBoard } from "@/types/kanbanBoard";
//@ts-ignore
import Draggable from "vue3-draggable";

const route = useRoute();

const state = reactive<{
  board: KanbanBoard | null;
  test: any[];
}>({
  board: null,
  test: [
    {
      id: 1,
      name: "test board 1",
      columns: [
        {
          id: 1,
          name: "column 1",
          subtask: ["5", "4"],
        },
        {
          id: 2,
          name: "column 2",
          subtask: ["1", "2"],
        },
      ],
    },
  ],
});

const fetchBoard = async () => {
  try {
    const response = await KanbanService.getBoard(String(route.params.boardId));
    state.board = response.data.data;
  } catch (e) {
    console.log(e);
  }
};

onMounted(() => fetchBoard());
</script>

<template>
  <div v-if="state.board" class="flex space-x-12">
    <div v-for="column in state.test[0].columns" :key="column.id">
      <div class="text-white">
        <h1>{{ column.name }}</h1>
        <draggable v-model="column.subtask">
          <template v-slot:item="{ item }">
            <div>
              {{ item }}
            </div>
          </template>
        </draggable>
      </div>
    </div>
    <div class="bg-black text-white">
      {{ state.test[0].columns[0] }}
      {{ state.test[0].columns[1] }}
    </div>
  </div>
</template>

<style scoped></style>
