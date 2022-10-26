import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

axios.defaults.baseURL = "http://localhost:3000";

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
    return error;
  }
);

app.use(createPinia());
app.use(router);

app.mount("#app");
