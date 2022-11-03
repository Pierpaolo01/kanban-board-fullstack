import { defineStore } from "pinia";

export const useLoaderStore = defineStore({
  id: "loader",
  state: () => ({
    loading: false,
  }),
  getters: {
    getLoadingState(state) {
      return state.loading;
    },
  },
  actions: {
    startLoader() {
      this.loading = true;
    },
    stopLoader() {
      this.loading = false;
    },
  },
});
