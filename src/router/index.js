import { createRouter, createWebHistory } from "vue-router";
import ROUTE from "@/router/route";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/HomeView/HomeView.vue"),
      children: [
        {
          path: "",
          name: ROUTE.HOME,
          component: () => import("@/views/HomeView/HomeMain/HomeMain.vue"),
        },
        {
          path: "/abc",
          name: ROUTE.MY_COMPONENT,
          component: () => import("@/views/MyComponent/MyComponent.vue"),
        },
      ],
    },
  ],
});
