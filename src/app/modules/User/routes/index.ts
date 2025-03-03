import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "user-admin",
    name: "UserAdmin",
    component: () => import("@/app/modules/User/views/UserAdminView.vue"),
  },
  {
    path: "user-teacher",
    name: "UserTeacher",
    component: () => import("@/app/modules/User/views/UserTeacherView.vue"),
  },
  {
    path: "user-student",
    name: "UserStudent",
    component: () => import("@/app/modules/User/views/UserStudentView.vue"),
  },
];

export default routes;
