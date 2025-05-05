import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "academic-record",
    name: "AcademicRecord",
    component: () =>
      import("@/app/modules/AcademicRecord/views/AcademicRecordView.vue"),
  },
];

export default routes;
