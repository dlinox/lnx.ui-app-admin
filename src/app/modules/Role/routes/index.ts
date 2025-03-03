import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "role-admin",
    name: "RoleAdmin",
    component: () => import("@/app/modules/Role/views/RoleAdminView.vue"),
  },
];

export default routes;
