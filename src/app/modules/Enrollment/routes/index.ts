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
  //EnrollmentSpecialStudent
  {
    path: "enrollment-special/:id/student",
    name: "EnrollmentSpecialStudent",
    component: () => import("@/app/modules/Enrollment/views/EnrollmentSpecialStudentView.vue"),
  },
  {
    path: "enrollment/virtual",
    name: "EnrollmentVirtual",
    component: () =>
      import("@/app/modules/Enrollment/views/EnrollmentVirtualView.vue"),
  },
];

export default routes;
