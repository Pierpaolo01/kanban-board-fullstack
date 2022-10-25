import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

axios.defaults.baseURL = 'http://localhost:3000';


axios.interceptors.request.use((request) => {
    const token = localStorage.getItem('token');
    console.log(token)
    request.headers.Authorization = token ? `Bearer ${token}` : null;
    return request;
})

app.use(createPinia());
app.use(router);

app.mount("#app");
