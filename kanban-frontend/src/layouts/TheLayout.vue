<script setup lang="ts">
import IconLogo from "../assets/icons/IconLogo.vue";
import KanbanButton from "../components/KanbanButton.vue";
import IconChevronDown from "../assets/icons/IconChevronDown.vue";
import IconBoard from "../assets/icons/IconBoard.vue";
import TheMobileSidebar from "../components/TheMobileSidebar.vue";
import { computed, onMounted, reactive } from "vue";
import KanbanService from "../services/kanbanService";
import type { KanbanBoard } from "@/types/kanbanBoard";
import KanbanModalBoardCreate from "../components/modals/KanbanModalBoardCreate.vue";
import KanbanModal from "../components/modals/KanbanModal.vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const state = reactive<{
  toggleMobileNav: boolean;
  boards: Array<KanbanBoard>;
  selectedBoard: KanbanBoard | null;
  openCreateBoardModal: boolean;
}>({
  toggleMobileNav: false,
  boards: [],
  openCreateBoardModal: false,
  selectedBoard: null,
});

const getAllBoards = async () => {
  try {
    const response = await KanbanService.getAllBoards();
    state.boards = response.data.data;

    if (!route.params.boardId && state.boards.length) {
      await router.push({
        name: "board",
        params: { boardId: state.boards[0].id },
      });
    }
  } catch (e) {
    console.log(e);
  }
};

const gsCurrentBoard = computed({
  get() {
    return state.boards.find(
      (board) => board.id === Number(route.params.boardId)
    );
  },
  set() {},
});

onMounted(() => getAllBoards());
</script>

<template>
  <div class="flex flex-row-reverse justify-between w-full h-full relative">
    <div class="bg-light-mode w-full flex-shrink-1">
      <header
        class="px-4 py-6 h-16 bg-white dark:bg-dark-gray flex items-center justify-between"
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
            {{ gsCurrentBoard ? gsCurrentBoard.name : "" }}
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
          {{ gsCurrentBoard ? gsCurrentBoard.name : "" }}
        </h1>
        <div>
          <KanbanButton v-if="route.name === 'board'" text="+" />
        </div>
      </header>
      <div class="p-6">
        <slot />
      </div>
    </div>
    <div
      class="min-w-[260px] text-gray-medium bg-white dark:bg-dark-gray h-full"
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
        <h1 class="uppercase mb-5 text-sm">
          all boards {{ state.boards.length }}
        </h1>
        <div>
          <router-link
            v-for="board in state.boards"
            :key="board.id"
            :to="{ name: 'board', params: { boardId: board.id } }"
            class="-ml-6 pl-6 text-md py-3 flex rounded-r-full items-center space-x-4 cursor-pointer hover:text-white hover:bg-purple-hover"
            active-class="bg-purple rounded-r-full text-white"
            @click="state.selectedBoard = board"
          >
            <IconBoard />
            <span> {{ board.name }} </span>
          </router-link>
        </div>
        <button
          class="py-3 flex items-center space-x-4"
          @click="state.openCreateBoardModal = !state.openCreateBoardModal"
        >
          <IconBoard />
          <span class="text-purple text-md">+ create board</span>
        </button>
      </div>
    </div>
  </div>
  <kanban-modal v-model="state.openCreateBoardModal" :has-click-away="false">
    <KanbanModalBoardCreate
      @boardCreated="
        getAllBoards();
        state.openCreateBoardModal = false;
      "
    />
  </kanban-modal>
</template>
