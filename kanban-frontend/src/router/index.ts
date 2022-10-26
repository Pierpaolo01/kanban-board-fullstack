import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/AuthenticationView.vue"),
    },
    {
      path: "/boards",
      name: "boards",
      component: () => import("../views/KanbanBoardView.vue"),
      children: [
        //         {
        //          path: ":boardId",
        //          name: "board",
        //          component: () => import(""),
        //         }
      ],
    },
  ],
});

export default router;
