<script setup lang="ts">
import KanbanInputText from "../KanbanInputText.vue";
import { reactive } from "vue";
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
  showNewColumnInput: boolean;
  newColumnValue: string;
  newColumns: Array<string>;
}>({
  localBoard: cloneDeep(props.board),
  deletedColumns: [],
  showNewColumnInput: false,
  newColumnValue: "",
  newColumns: [],
});

const updateBoard = async () => {
  try {
    for await (const column of state.deletedColumns) {
      await deleteColumn(column.id);
    }

    for await (const newColumn of state.newColumns) {
      await addColumn(newColumn);
    }

    await KanbanService.updateBoard(state.localBoard.id, state.localBoard);
    emits("boardUpdated");
  } catch (e) {
    console.log(e);
  }
};

const deleteColumn = async (columnId: number) => {
  try {
    await KanbanService.deleteColumn(state.localBoard.id, columnId);
  } catch (e) {
    console.log(e);
  }
};

const addColumn = async (columnName: string) => {
  try {
    await KanbanService.addNewColumn(state.localBoard.id, columnName);
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
      v-model="state.localBoard.name"
      placeholder="e.g. Web Design"
    />
    <div>
      <label class="text-dark-lines text-sm dark:text-white"> Columns </label>
      <div
        v-for="(column, index) in state.localBoard.Columns.slice().reverse()"
        :key="column.id"
        class="flex justify-between items-center space-x-4"
      >
        <KanbanInputText v-model="column.name" />
        <button
          @click="
            state.deletedColumns.push(column);
            state.localBoard.Columns.splice(index, 1);
          "
          class="text-red text-sm text-center hover:underline"
        >
          Delete
        </button>
      </div>
      <div
        v-for="(_, index) in state.newColumns"
        :key="index"
        class="flex justify-between items-center space-x-4"
      >
        <KanbanInputText v-model="state.newColumns[index]" />
        <button
          @click="state.newColumns.splice(index, 1)"
          class="text-red text-sm text-center hover:underline"
        >
          Delete
        </button>
      </div>
      <div
        v-if="state.showNewColumnInput"
        class="flex justify-between items-center space-x-4"
      >
        <KanbanInputText v-model="state.newColumnValue" />
        <button
          @click="
            state.newColumns.push(state.newColumnValue);
            state.newColumnValue = '';
            state.showNewColumnInput = false;
          "
          class="text-sm text-center w-11 border p-1 rounded-xl border-purple text-purple"
        >
          Add
        </button>
      </div>
      <KanbanButton
        class="mt-4"
        :text="state.showNewColumnInput ? 'Cancel' : 'Add new column'"
        :variant="state.showNewColumnInput ? 'destructive' : 'secondary'"
        @click="
          state.showNewColumnInput = !state.showNewColumnInput;
          state.newColumnValue = '';
        "
      />
    </div>
    <KanbanButton text="Save Changes" @click="updateBoard" />
  </div>
</template>
