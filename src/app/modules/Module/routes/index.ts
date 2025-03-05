import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "module/:id?",
    name: "Module",
    component: () => import("@/app/modules/Module/views/index.vue"),
  },
];

export default routes;
