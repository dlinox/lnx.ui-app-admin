import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "curriculum",
    name: "Curriculum",
    component: () => import("@/app/modules/Curriculum/views/index.vue"),
  },
  {
    path: "curriculum/:id/courses",
    name: "CurriculumCourse",
    component: () =>
      import("@/app/modules/Curriculum/views/curriculum-course.vue"),
  },
];

export default routes;
