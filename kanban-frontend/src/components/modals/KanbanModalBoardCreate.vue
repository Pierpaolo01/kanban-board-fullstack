<script setup lang="ts">
import KanbanInputText from "../KanbanInputText.vue";
import { reactive } from "vue";
import KanbanButton from "../KanbanButton.vue";
import KanbanMultipleInputs from "../KanbanMultipleInputs.vue";
import KanbanService from "../../services/kanbanService";
import type {KanbanBoardForm} from "../../types/KanbanBoard"

const emits = defineEmits(['boardCreated']);

const board = reactive<KanbanBoardForm>({
  name: "",
  columns: [],
});

const createBoard = async () => {
  try {
    await KanbanService.createBoard(board);
    emits('boardCreated')
  } catch (e) {
    console.log(e);
  }
}
</script>

<template>
  <div class="flex flex-col space-y-6 text-black dark:text-white">
    <h1 class="text-lg">Add new board</h1>
    <KanbanInputText
      label="Board Name"
      v-model="board.name"
      placeholder="e.g. Web Design"
    />
    <div>
      <KanbanMultipleInputs
        v-model="board.columns"
        label="Add column"
        placeholder="e.g. Product launch"
        button-text="+ add column"
        @add="board.columns.push($event)"
        @remove="board.columns.splice($event, 1)"
      />
    </div>
    <KanbanButton text="Create Board" @click="createBoard" />
  </div>
</template>
