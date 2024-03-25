import { createRouter, createWebHistory } from "vue-router";
import ROUTE from "@/router/route";
import {
  CalculatorOutlined,
  FolderOpenOutlined,
  HomeOutlined,
} from "@ant-design/icons-vue";

export const routes = [
  {
    path: "/",
    component: () => import("@/views/HomeView/HomeView.vue"),
    icon: <HomeOutlined />,
    isMenuItem: true,
    nameDisplay: "Trang chủ",
    children: [
      {
        name: ROUTE.HOME,
        path: "/",
        component: () => import("@/views/HomeView/HomeMain/HomeMain.vue"),
      },
      {
        name: ROUTE.HOME_SUB,
        path: "/sub",
        component: () => import("@/views/HomeView/HomeSub/HomeSub.vue"),
      },
    ],
  },
  {
    path: "/count",
    name: ROUTE.MY_COMPONENT,
    component: () => import("@/views/MyComponent/MyComponent.vue"),
    icon: <CalculatorOutlined />,
    isMenuItem: true,
    nameDisplay: "count",
  },
  {
    path: "/category-management",
    name: ROUTE.CATEGORY_MANAGEMENT,
    component: () =>
      import("@/views/CategoryManagement/CategoryManagement.vue"),
    icon: <FolderOpenOutlined />,
    isMenuItem: true,
    nameDisplay: "Quản lý danh mục",
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: ROUTE.HOME },
  },
];

export default createRouter({
  history: createWebHistory(),
  routes: routes,
});
