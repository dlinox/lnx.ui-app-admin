import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "session-time",
    name: "SessionTime",
    component: () => import("@/app/modules/SessionTime/views/index.vue"),
  },
];

export default routes;
