import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "enrollment",
    name: "Enrollment",
    component: () =>
      import("@/app/modules/Enrollment/views/EnrollmentView.vue"),
  },
  {
    path: "enrollment/:id/student",
    name: "EnrollmentStudent",
    component: () =>
      import("@/app/modules/Enrollment/views/EnrollmentStudentView.vue"),
  },
];

export default routes;
