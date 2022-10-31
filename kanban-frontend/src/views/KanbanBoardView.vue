<script setup lang="ts">
import TheLayout from "../layouts/TheLayout.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <the-layout>
    <RouterView :key="String(route.params.boardId)" />
  </the-layout>
</template>
