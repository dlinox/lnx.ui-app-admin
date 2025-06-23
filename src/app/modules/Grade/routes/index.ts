import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "grade",
    name: "Grade",
    component: () =>
      import("@/app/modules/Grade/views/GradeView.vue"),
  },
];

export default routes;
