import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "module-price",
    name: "ModulePrice",
    component: () => import("@/app/modules/ModulePrice/views/index.vue"),
  },
];

export default routes;
