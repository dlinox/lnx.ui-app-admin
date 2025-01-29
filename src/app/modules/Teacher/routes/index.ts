import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "teacher",
    name: "Teacher",
    component: () => import("@/app/modules/Teacher/views/index.vue"),
  },
];

export default routes;
