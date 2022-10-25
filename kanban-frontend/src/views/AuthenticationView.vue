<script setup lang="ts">
import {reactive} from "vue";
import KanbanModal from '../components/modals/KanbanModal.vue';
import KanbanInputText from '../components/KanbanInputText.vue'
import KanbanButton from "../components/KanbanButton.vue";

const authenticationForm = reactive<{
  username: string;
  password: string;
}>({
  username: "",
  password: ""
});
</script>

<template>
  <main>
    <kanban-modal :model-value="true" has-click-away="false">
      <form @submit.prevent class="space-y-6">
        <h1 class="text-xl text-dark-lines dark:text-white">
          Sign-up or Login
        </h1>
        <KanbanInputText v-model="authenticationForm.username" label="Username" />
        <KanbanInputText v-model="authenticationForm.password" label="Password" type="password" />
        <KanbanButton text="Sign Up" variant="primary"/>
        <KanbanButton text="Login" variant="secondary"/>
      </form>
    </kanban-modal>
  </main>
</template>
