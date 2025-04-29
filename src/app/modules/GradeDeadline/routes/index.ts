import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "grade-deadline",
    name: "GradeDeadline",
    component: () =>
      import("@/app/modules/GradeDeadline/views/GradeDeadlineView.vue"),
  },
];

export default routes;
