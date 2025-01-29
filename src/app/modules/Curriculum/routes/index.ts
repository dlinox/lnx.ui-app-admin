import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "curriculum",
    name: "Curriculum",
    component: () => import("@/app/modules/Curriculum/views/index.vue"),
  },
  {
    path: "curriculum/:id/modules",
    name: "CurriculumModule",
    component: () =>
      import("@/app/modules/Curriculum/views/curriculum-module.vue"),
  },
  //CurriculumModuleCourse
  {
    path: "curriculum/:id/courses",
    name: "CurriculumModuleCourse",
    component: () =>
      import("@/app/modules/Curriculum/views/curriculum-module-course.vue"),
  },
  
];

export default routes;
