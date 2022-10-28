<script setup lang="ts">
import KanbanInputText from "../KanbanInputText.vue";
import { computed, reactive } from "vue";
import KanbanButton from "../KanbanButton.vue";
import KanbanService from "../../services/kanbanService";
import type { KanbanBoard } from "@/types/kanbanBoard";
import type { KanbanColumn } from "@/types/kanbanColumn";
import cloneDeep from "lodash.clonedeep";

const emits = defineEmits(["boardUpdated"]);
const props = defineProps<{
  board: KanbanBoard;
}>();

const state = reactive<{
  localBoard: KanbanBoard;
  deletedColumns: Array<KanbanColumn>;
}>({
  localBoard: cloneDeep(props.board),
  deletedColumns: [],
});

const gsBoard = computed({
  get() {
    return { ...props.board };
  },
  set(value) {
    console.log(value);
    state.localBoard = value;
  },
});

const updateBoard = async () => {
  try {
    for await (const column of state.deletedColumns) {
      await deleteColumn(column.id);
    }

    await KanbanService.updateBoard(state.localBoard.id, state.localBoard);
    emits("boardUpdated");
  } catch (e) {
    console.log(e);
  }
};

const deleteColumn = async (columnId: number) => {
  try {
    await KanbanService.deleteColumn(columnId);
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <div class="flex flex-col space-y-6 text-black dark:text-white">
    <h1 class="text-lg">Edit board</h1>
    <KanbanInputText
      label="Board Name"
      v-model="gsBoard.name"
      placeholder="e.g. Web Design"
    />
    <div>
      <label class="text-dark-lines text-sm dark:text-white"> Columns </label>
      <div
        v-for="(column, index) in state.localBoard.Columns"
        :key="column.id"
        class="flex justify-between items-center space-x-4"
      >
        <KanbanInputText v-model="column.name" />
        <button
          @click="
            state.deletedColumns.push(column);
            state.localBoard.Columns.splice(index, 1);
          "
          class="text-red text-sm text-center"
        >
          Delete
        </button>
      </div>
    </div>
    <KanbanButton text="Save Changes" @click="updateBoard" />
  </div>
</template>
