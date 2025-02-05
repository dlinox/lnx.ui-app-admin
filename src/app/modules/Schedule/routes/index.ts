import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "schedule",
    name: "Schedule",
    component: () => import("@/app/modules/Schedule/views/index.vue"),
  },
];

export default routes;
