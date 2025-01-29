import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "module",
    name: "Module",
    component: () => import("@/app/modules/Module/views/index.vue"),
  },
];

export default routes;
