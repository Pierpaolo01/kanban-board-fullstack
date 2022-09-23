<script setup lang="ts">
import IconLogo from "../assets/icons/IconLogo.vue";
import KanbanButton from "../components/KanbanButton.vue";
import IconChevronDown from "../assets/icons/IconChevronDown.vue";
</script>

<template>
  <div>
    <header
      class="px-4 py-6 w-full h-16 bg-white dark:bg-dark-gray flex items-center justify-between"
    >
      <div class="flex items-center space-x-4">
        <IconLogo />
        <h1 class="text-lg text-black dark:text-white flex items-center">
          TODO Board name <IconChevronDown class="ml-2" />
        </h1>
      </div>
      <div>
        <KanbanButton text="+" />
      </div>
    </header>
  </div>
</template>
