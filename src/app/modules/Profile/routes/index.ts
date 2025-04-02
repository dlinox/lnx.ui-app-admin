import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "profile",
    name: "Profile",
    component: () => import("@/app/modules/Profile/views/ProfileView.vue"),
  },
];

export default routes;
