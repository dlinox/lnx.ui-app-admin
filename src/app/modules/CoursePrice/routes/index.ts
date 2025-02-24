import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "course-price",
    name: "CoursePrice",
    component: () => import("@/app/modules/CoursePrice/views/index.vue"),
  },
];

export default routes;
