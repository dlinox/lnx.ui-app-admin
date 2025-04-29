import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "academic-supervision",
    name: "AcademicSupervision",
    component: () =>
      import("@/app/modules/AcademicSupervision/views/AcademicSupervisionView.vue"),
  },
];

export default routes;
