<script setup lang="ts">
import IconLogo from "../assets/icons/IconLogo.vue";
import KanbanButton from "../components/KanbanButton.vue";
import IconChevronDown from "../assets/icons/IconChevronDown.vue";
import IconBoard from "../assets/icons/IconBoard.vue";
</script>

<template>
  <div class="flex flex-row-reverse min-h-full">
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
        <h1 class="text-lg text-black dark:text-white flex items-center">
          TODO Board name <IconChevronDown class="ml-2" />
        </h1>
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
    <aside class="w-[260px] bg-white dark:bg-dark-gray hidden md:block h-full">
      <div
        class="flex items-center space-x-4 p-4 h-16 border-r border-light-lines dark:border-dark-lines"
      >
        <IconLogo />
        <h1 class="text-xl hidden md:block text-black dark:text-white">
          kanban
        </h1>
      </div>
      <div class="mt-2 p-6">
        <h1 class="uppercase mb-5 text-sm">all boards (6)</h1>

        <div>
          <router-link
            v-for="(board, index) in 6"
            :key="board"
            to="TODO"
            class="-ml-6 pl-6 text-md py-3 flex items-center space-x-4"
            active-class="bg-purple rounded-r-full text-white"
          >
            <IconBoard />
            <span> board {{ index }} </span>
          </router-link>
        </div>
      </div>
    </aside>
  </div>
</template>
