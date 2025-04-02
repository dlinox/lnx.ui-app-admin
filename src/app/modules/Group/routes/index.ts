import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "group",
    name: "Group",
    component: () => import("@/app/modules/Group/views/index.vue"),
  },
  {
    path: "group-manager",
    name: "GroupManager",
    component: () => import("@/app/modules/Group/views/EnrollmentGroupView.vue"),
  }
];

export default routes;
