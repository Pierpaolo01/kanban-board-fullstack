<script setup lang="ts">
import KanbanInputText from "../KanbanInputText.vue";
import { reactive } from "vue";
import KanbanButton from "../KanbanButton.vue";
import KanbanMultipleInputs from "../KanbanMultipleInputs.vue";

const board = reactive<{
  name: string;
  columns: Array<string>;
}>({
  name: "",
  columns: [],
});
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
        label="Create Board"
        placeholder="e.g. Product launch"
        button-text="+ add new board"
        @add="board.columns.push($event)"
        @remove="board.columns.splice($event, 1)"
      />
    </div>
    <KanbanButton text="Save changes" />
  </div>
</template>
