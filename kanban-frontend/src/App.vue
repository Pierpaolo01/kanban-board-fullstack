<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
  <notifications class="mt-6 mr-6 text-md" />
</template>

<style>
#app {
  height: 100vh;
  color: black;
}
</style>
