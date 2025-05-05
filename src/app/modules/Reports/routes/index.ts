import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "student-report",
    name: "StudentReportView",
    component: () =>
      import("@/app/modules/Reports/views/StudentReportView.vue"),
  },
  {
    path: "group-report",
    name: "GroupReportView",
    component: () => import("@/app/modules/Reports/views/GroupReportView.vue"),
  },
];

export default routes;
