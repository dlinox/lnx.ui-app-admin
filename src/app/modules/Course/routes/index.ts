import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "course",
    name: "Course",
    component: () => import("@/app/modules/Course/views/index.vue"),
  },
];

export default routes;
