<script setup lang="ts">
import KanbanInputText from "../KanbanInputText.vue";
import { reactive, ref } from "vue";
import IconCross from "../icons/IconCross.vue";
import IconMinus from "../icons/IconMinus.vue";
import KanbanButton from "../KanbanButton.vue";

const board = reactive<{
  name: string;
  columns: Array<string>;
}>({
  name: "",
  columns: [],
});

const addNewColumn = ref(false);
const newColumnName = ref("");
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
      <div v-if="board.columns.length">
        <label class="text-dark-lines text-sm dark:text-white">
          Board Columns
        </label>
        <div
          class="flex items-center justify-between space-x-4 space-y-3 last:mb-3"
          v-for="(column, index) in board.columns"
          :key="index"
        >
          <KanbanInputText placeholder="Todo" v-model="board.columns[index]" />
          <IconCross
            class="mt-2 cursor-pointer"
            @click="board.columns.splice(index, 1)"
          />
        </div>
      </div>
      <div
        v-show="addNewColumn"
        class="flex items-center justify-between space-x-4 mb-3"
      >
        <KanbanInputText
          name="NewColumn"
          placeholder="Todo"
          v-model="newColumnName"
          @enter="
            addNewColumn = false;
            board.columns.push(newColumnName);
            newColumnName = '';
          "
        />
        <IconMinus
          class="mt-2 cursor-pointer"
          @click="
            addNewColumn = false;
            newColumnName = '';
          "
        />
      </div>
      <KanbanButton
        text="+ Add new Column"
        variant="secondary"
        @click="addNewColumn = true"
      />
    </div>
    {{ changesMade }}
    <KanbanButton text="Save changes" />
  </div>
</template>
