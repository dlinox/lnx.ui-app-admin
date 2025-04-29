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
import PeriodRoutes from "@/app/modules/Period/routes";
import GroupRoutes from "@/app/modules/Group/routes";
import PriceRoutes from "@/app/modules/Price/routes";
import ModulePriceRoutes from "@/app/modules/ModulePrice/routes";
import CoursePriceRoutes from "@/app/modules/CoursePrice/routes";
import EnrollmentRoutes from "@/app/modules/Enrollment/routes/index";
import AuthenticationRoutes from "@/app/modules/Authentication/routes";
import RoleRoutes from "@/app/modules/Role/routes";
import UserRoutes from "@/app/modules/User/routes";
import EnrollmentDeadlineRoutes from "@/app/modules/EnrollmentDeadline/routes";
import ProfileRoutes from "@/app/modules/Profile/routes";
import GradeDeadlineRoutes from "@/app/modules/GradeDeadline/routes";
import AcademicSupervisionRoutes from "@/app/modules/AcademicSupervision/routes";

import { authMiddleware } from "@/app/middleware/auth.middleware";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "AdminLayout",
    component: () => import("@/app/layouts/AdminLayout.vue"),
    beforeEnter: authMiddleware,
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
      ...PeriodRoutes,
      ...GroupRoutes,
      ...ModulePriceRoutes,
      ...CoursePriceRoutes,
      ...PriceRoutes,
      ...EnrollmentRoutes,
      ...RoleRoutes,
      ...UserRoutes,
      ...EnrollmentDeadlineRoutes,
      ...ProfileRoutes,
      ...GradeDeadlineRoutes,
      ...AcademicSupervisionRoutes,
    ],
  },
  ...AuthenticationRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
