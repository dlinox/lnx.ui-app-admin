import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "enrollment-deadline",
    name: "EnrollmentDeadline",
    component: () =>
      import("@/app/modules/EnrollmentDeadline/views/EnrollmentDeadlineView.vue"),
  },
];

export default routes;
