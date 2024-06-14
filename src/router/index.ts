import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main"
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

console.log(process.env.ASSET_PREFIX, "process.env.ASSET_PREFIX");

export const router = createRouter({
  history: createWebHistory(process.env.ASSET_PREFIX),
  routes
});
