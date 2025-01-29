import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "payment-type",
    name: "PaymentType",
    component: () => import("@/app/modules/PaymentType/views/index.vue"),
  },
];

export default routes;
