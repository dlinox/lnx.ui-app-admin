import { noAuthMiddleware } from "@/app/middleware/auth.middleware";
import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    beforeEnter: noAuthMiddleware,
    component: () => import("@/app/modules/Authentication/views/Login.vue"),
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    beforeEnter: noAuthMiddleware,
    component: () =>
      import("@/app/modules/Authentication/views/ResetPassword.vue"),
  },
];

export default routes;
