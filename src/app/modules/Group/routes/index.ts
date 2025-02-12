import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "Group",
    name: "Group",
    component: () => import("@/app/modules/Group/views/index.vue"),
  },
];

export default routes;
