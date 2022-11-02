import { defineStore } from "pinia";

export const useLoaderStore = defineStore({
  id: "loader",
  state: () => ({
    loading: false,
  }),
  actions: {
    startLoader() {
      this.loading = true;
    },
    stopLoader() {
      this.loading = false;
    },
  },
});
