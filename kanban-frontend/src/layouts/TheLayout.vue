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
import KanbanModalUpdateBoard from "../components/modals/KanbanModalUpdateBoard.vue";
import KanbanModal from "../components/modals/KanbanModal.vue";
import { useRoute, useRouter } from "vue-router";
import IconEdit from "@/components/icons/IconEdit.vue";
import KanbanModalCreateUpdateTask from "@/components/modals/KanbanModalCreateUpdateTask.vue";

const route = useRoute();
const router = useRouter();

const state = reactive<{
  toggleMobileNav: boolean;
  boards: Array<KanbanBoard>;
  selectedBoard: KanbanBoard | null;
  openCreateBoardModal: boolean;
  openEditBoardModal: boolean;
  openAddTaskModal: boolean;
}>({
  toggleMobileNav: false,
  boards: [],
  openCreateBoardModal: false,
  selectedBoard: null,
  openEditBoardModal: false,
  openAddTaskModal: false,
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

const gsCurrentBoard = computed(() => {
  return state.boards.find(
    (board) => board.id === Number(route.params.boardId)
  );
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
          <div class="flex text-black dark:text-white">
            <h1
              v-if="state.boards.length"
              class="text-lg cursor-pointer text-center flex items-center"
              @click="state.toggleMobileNav = !state.toggleMobileNav"
            >
              {{ gsCurrentBoard ? gsCurrentBoard.name : "" }}
              <IconChevronDown
                class="ml-2"
                :class="state.toggleMobileNav ? 'rotate-180' : ''"
              />
            </h1>
            <button
              v-if="gsCurrentBoard"
              class="ml-4"
              @click="state.openEditBoardModal = !state.openEditBoardModal"
            >
              <IconEdit />
            </button>
          </div>

          <TheMobileSidebar
            v-if="state.toggleMobileNav"
            :boards="state.boards"
            class="absolute top-16 left-8 z-50"
            @close="state.toggleMobileNav = false"
            @create-board="state.openCreateBoardModal = true"
          />
        </div>
        <h1
          class="text-lg hidden md:flex text-black dark:text-white items-center"
        >
          {{ gsCurrentBoard ? gsCurrentBoard.name : "" }}
          <button
            v-if="gsCurrentBoard"
            class="ml-4"
            @click="state.openEditBoardModal = !state.openEditBoardModal"
          >
            <IconEdit />
          </button>
        </h1>
        <div>
          <KanbanButton
            v-if="route.name === 'board'"
            text="+ Add new task"
            @click="state.openAddTaskModal = !state.openAddTaskModal"
          />
        </div>
      </header>
      <div class="p-6">
        <div
          v-if="!state.boards.length"
          class="space-y-6 mt-[50%] max-w-[450px] mx-auto"
        >
          <h1 class="text-lg">You have no boards. Consider creating a board</h1>
          <KanbanButton
            class="mx-auto"
            text="+ Add New Board"
            @click="state.openCreateBoardModal = true"
          />
        </div>
        <slot v-else />
      </div>
    </div>
    <aside
      class="min-w-[260px] text-gray-medium bg-white dark:bg-dark-gray h-full hidden md:block"
    >
      <div
        class="flex items-center space-x-4 p-4 h-16 border-r border-light-lines dark:border-dark-lines"
      >
        <IconLogo />
        <h1 class="text-xl hidden md:block text-black dark:text-white">
          kanban
        </h1>
      </div>
      <div class="mt-2 p-6 overflow-y-auto">
        <h1 class="uppercase mb-5 text-sm">
          all boards {{ state.boards.length }}
        </h1>
        <div class="max-h-full">
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
    </aside>
  </div>
  <kanban-modal v-model="state.openCreateBoardModal" :has-click-away="false">
    <KanbanModalBoardCreate
      @boardCreated="
        getAllBoards();
        state.openCreateBoardModal = false;
      "
    />
  </kanban-modal>
  <kanban-modal v-model="state.openEditBoardModal" :has-click-away="true">
    <KanbanModalUpdateBoard
      v-if="state.openEditBoardModal && gsCurrentBoard"
      :board="gsCurrentBoard"
      @boardUpdated="
        getAllBoards();
        state.openEditBoardModal = false;
        router.go(0);
      "
    />
  </kanban-modal>
  <kanban-modal v-model="state.openAddTaskModal">
    <KanbanModalCreateUpdateTask
      v-if="gsCurrentBoard"
      :board="gsCurrentBoard"
      type="create"
      @close="
        state.openAddTaskModal = false;
        router.go(0);
      "
    />
  </kanban-modal>
</template>
