<script setup lang="ts">
import IconBoard from "../assets/icons/IconBoard.vue";
</script>

<template>
  <div
    class="rounded-lg min-w-[264px] bg-white dark:bg-dark-gray text-gray-medium"
  >
    <div class="mt-2 p-6">
      <h1 class="uppercase mb-5 text-sm">all boards (6)</h1>
      <div>
        <router-link
          v-for="(board, index) in 6"
          :key="board"
          to="TODO"
          class="-ml-6 pl-6 text-md py-3 flex rounded-r-full items-center space-x-4 cursor-pointer hover:text-white hover:bg-purple-hover"
          active-class="bg-purple text-white"
        >
          <IconBoard />
          <span> board {{ index }} </span>
        </router-link>
      </div>
      <button class="py-3 flex items-center space-x-4">
        <IconBoard />
        <span class="text-purple text-md">+ create board</span>
      </button>
    </div>
  </div>
</template>
