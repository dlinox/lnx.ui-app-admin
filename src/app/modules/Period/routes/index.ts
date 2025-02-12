import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "period",
    name: "Period",
    component: () => import("@/app/modules/Period/views/index.vue"),
  },
];

export default routes;
