<script setup lang="ts">
import { reactive } from "vue";
import KanbanModal from "../components/modals/KanbanModal.vue";
import KanbanInputText from "../components/KanbanInputText.vue";
import KanbanButton from "../components/KanbanButton.vue";
import type { AuthenticationForm } from "@/types/authenticationForm";
import UserService from "@/services/userService";
import { useRouter } from "vue-router";
import { useLoaderStore } from "@/stores/loadingStore";

const loadingStore = useLoaderStore();
const router = useRouter();

const authenticationForm = reactive<AuthenticationForm>({
  username: "",
  password: "",
});

const signUp = async () => {
  loadingStore.startLoader();

  try {
    const response = await UserService.signUp(authenticationForm);
    localStorage.setItem("token", response.data.data);
    await router.push({ name: "boards" });
  } catch (e) {
    console.log(e);
  } finally {
    loadingStore.stopLoader();
  }
};

const login = async () => {
  loadingStore.startLoader();
  try {
    const response = await UserService.login(authenticationForm);
    localStorage.setItem("token", response.data.data);
    await router.push({ name: "boards" });
  } catch (e) {
    console.log(e);
  } finally {
    loadingStore.stopLoader();
  }
};
</script>

<template>
  <main>
    <kanban-modal :model-value="true" :has-click-away="false">
      <form @submit.prevent class="space-y-6">
        <h1 class="text-xl text-dark-lines dark:text-white">
          Sign-up or Login
        </h1>
        <KanbanInputText
          v-model="authenticationForm.username"
          label="Username"
        />
        <KanbanInputText
          v-model="authenticationForm.password"
          label="Password"
          type="password"
        />
        <KanbanButton text="Sign Up" variant="primary" @click="signUp()" />
        <KanbanButton text="Login" variant="secondary" @click="login()" />
      </form>
    </kanban-modal>
  </main>
</template>
