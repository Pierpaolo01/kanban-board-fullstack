import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import Notifications from "@kyvg/vue3-notification";
import { notify } from "@kyvg/vue3-notification";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import * as process from "process";

const app = createApp(App);

axios.defaults.baseURL = process.env.PORT
  ? "https://kanban-node-api.herokuapp.com"
  : "http://localhost:3000";

axios.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");

  request.headers!.Authorization = token ? `Bearer ${token}` : null;
  return request;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      router.push({ name: "auth" });
    }
    if (error.response.status === 404) {
      notify({
        type: "error",
        title: "Resource not found",
      });
    }
    return error;
  }
);

app.use(Notifications);
app.use(createPinia());
app.use(router);

app.mount("#app");
