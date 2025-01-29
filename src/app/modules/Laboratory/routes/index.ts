import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "laboratory",
    name: "Laboratory",
    component: () => import("@/app/modules/Laboratory/views/index.vue"),
  },
];

export default routes;
