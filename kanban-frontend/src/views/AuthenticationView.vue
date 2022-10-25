<script setup lang="ts">
import {reactive} from "vue";
import KanbanModal from '../components/modals/KanbanModal.vue';
import KanbanInputText from '../components/KanbanInputText.vue'
import KanbanButton from "../components/KanbanButton.vue";
import type {AuthenticationForm} from "../types/AuthenticationForm.ts";
import UserService from "@/services/userService";

const authenticationForm = reactive<AuthenticationForm>({
  username: "",
  password: ""
});

const signUp = async () => {
  try {
    const response = await UserService.signUp(authenticationForm);
    localStorage.setItem('token', response.data);

  } catch (e) {
    console.log(e);
  }
}

const login = async () => {
  try {
    const response = await UserService.login(authenticationForm);
    localStorage.setItem('token', response.data);
  } catch (e) {
    console.log(e);
  }
}
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
        <KanbanButton text="Sign Up" variant="primary" @click="signUp()"/>
        <KanbanButton text="Login" variant="secondary" @click="login()"/>
      </form>
    </kanban-modal>
  </main>
</template>
