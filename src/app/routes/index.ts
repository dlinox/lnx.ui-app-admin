import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import DocumentTypeRoutes from "@/app/modules/DocumentType/routes";
import StudentTypeRoutes from "@/app/modules/StudentType/routes";
import PaymentTypeRoutes from "@/app/modules/PaymentType/routes";
import StudentRoutes from "@/app/modules/Student/routes";
import TeacherRoutes from "@/app/modules/Teacher/routes";
import AreaRoutes from "@/app/modules/Area/routes";
import ModuleRoutes from "@/app/modules/Module/routes";
import CourseRoutes from "@/app/modules/Course/routes";
import LaboratoryRoutes from "@/app/modules/Laboratory/routes";
import CurriculumRoutes from "@/app/modules/Curriculum/routes";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "AdminLayout",
    component: () => import("@/app/layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("@/app/modules/dashboard/view/index.vue"),
      },
      ...DocumentTypeRoutes,
      ...StudentTypeRoutes,
      ...PaymentTypeRoutes,
      ...StudentRoutes,
      ...TeacherRoutes,
      ...AreaRoutes,
      ...ModuleRoutes,
      ...CourseRoutes,
      ...LaboratoryRoutes,
      ...CurriculumRoutes,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
