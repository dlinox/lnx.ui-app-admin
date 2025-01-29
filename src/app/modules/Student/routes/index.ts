import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "student",
    name: "Student",
    component: () => import("@/app/modules/Student/views/index.vue"),
  },
];

export default routes;
