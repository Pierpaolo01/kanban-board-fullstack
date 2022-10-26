<script setup lang="ts">
import IconLogo from "../assets/icons/IconLogo.vue";
import KanbanButton from "../components/KanbanButton.vue";
import IconChevronDown from "../assets/icons/IconChevronDown.vue";
import IconBoard from "../assets/icons/IconBoard.vue";
import TheMobileSidebar from "../components/TheMobileSidebar.vue";
import {onMounted, reactive, ref} from "vue";
import KanbanService from "../services/kanbanService"
import type {KanbanBoard} from "../services/KanbanBoard"

const state = reactive<{
  toggleMobileNav: boolean;
  boards: Array<KanbanBoard>;
}>({
  toggleMobileNav: false,
  boards: [],
});

const getAllBoards = async () => {
  try {
    const response = await KanbanService.getAllBoards();
    state.boards = response.data.data;
  } catch (e) {
    console.log(e);
  }
}

onMounted(() => getAllBoards());
</script>

<template>
  <div class="flex flex-row-reverse h-full relative">
    <header
      class="px-4 py-6 w-full h-16 bg-white dark:bg-dark-gray flex items-center justify-between"
    >
      <div class="flex items-center space-x-4 md:hidden">
        <div
          class="flex items-center space-x-4 -my-4 py-4 pr-4 border-r border-light-lines dark:border-dark-lines"
        >
          <IconLogo />
          <h1 class="text-xl hidden md:block text-black dark:text-white">
            kanban
          </h1>
        </div>
        <h1
          class="text-lg cursor-pointer text-center text-black dark:text-white flex items-center"
          @click="state.toggleMobileNav = !state.toggleMobileNav"
        >
          TODO Board name
          <IconChevronDown
            class="ml-2"
            :class="state.toggleMobileNav ? 'rotate-180' : ''"
          />
        </h1>
        <TheMobileSidebar
          v-if="state.toggleMobileNav"
          class="absolute top-16 left-8"
        />
      </div>
      <h1
        class="text-lg hidden md:flex text-black dark:text-white items-center"
      >
        TODO Board name
      </h1>
      <div>
        <KanbanButton text="+" />
      </div>
    </header>
    <aside
      class="w-[260px] text-gray-medium bg-white dark:bg-dark-gray hidden md:block h-full"
    >
      <div
        class="flex items-center space-x-4 p-4 h-16 border-r border-light-lines dark:border-dark-lines"
      >
        <IconLogo />
        <h1 class="text-xl hidden md:block text-black dark:text-white">
          kanban
        </h1>
      </div>
      <div class="mt-2 p-6">
        <h1 class="uppercase mb-5 text-sm">all boards {{state.boards.length}}</h1>
        <div>
          <router-link
            v-for="board in state.boards"
            :key="board"
          to="{name: 'board', params: {boardId: board.id}}"
            class="-ml-6 pl-6 text-md py-3 flex rounded-r-full items-center space-x-4 cursor-pointer hover:text-white hover:bg-purple-hover"
            active-class="bg-purple rounded-r-full text-white"
          >
            <IconBoard />
            <span> {{board.name}} </span>
          </router-link>
        </div>
        <button class="py-3 flex items-center space-x-4">
          <IconBoard />
          <span class="text-purple text-md">+ create board</span>
        </button>
      </div>
    </aside>
  </div>
</template>
