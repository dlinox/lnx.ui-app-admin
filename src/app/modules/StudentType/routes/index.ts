import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "student-type",
    name: "StudentType",
    component: () => import("@/app/modules/StudentType/views/index.vue"),
  },
];

export default routes;
