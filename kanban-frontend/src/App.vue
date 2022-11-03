<script setup lang="ts">
import { RouterView } from "vue-router";
import KanbanLoadingIndicator from "@/components/KanbanLoadingIndicator.vue";
import { useLoaderStore } from "@/stores/loadingStore";
import { storeToRefs } from "pinia";

const loadingStore = useLoaderStore();

const { getLoadingState } = storeToRefs(loadingStore);
</script>

<template>
  <RouterView />
  <notifications class="mt-6 mr-6 text-md" />
  <KanbanLoadingIndicator v-if="getLoadingState" />
</template>

<style>
#app {
  height: 100vh;
  color: black;
}
</style>
