import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import("@/pages/home/index.vue")
  },
  {
    path: "/main",
    component: () => import("@/pages/main/index.vue")
  }
];

export const router = createRouter({
  history: createWebHistory("/test/abc/"),
  routes
});
