<script setup lang="ts">
import KanbanInputText from "../KanbanInputText.vue";
import { reactive } from "vue";
import KanbanButton from "../KanbanButton.vue";
import KanbanMultipleInputs from "../KanbanMultipleInputs.vue";
import KanbanService from "../../services/kanbanService";
import type { KanbanBoardForm } from "@/types/kanbanBoard";
import { useRouter } from "vue-router";
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification();

const router = useRouter();

const emits = defineEmits(["boardCreated"]);

const board = reactive<KanbanBoardForm>({
  name: "",
  columns: [],
});

const createBoard = async () => {
  try {
    const response = await KanbanService.createBoard(board);
    notify({
      type: "success",
      title: "Successfully created board",
    });
    emits("boardCreated");
    await router.push({
      name: "board",
      params: { boardId: response.data.data.id },
    });
  } catch {
    notify({
      type: "error",
      title: "Something went wrong with creating board",
    });
  }
};
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
