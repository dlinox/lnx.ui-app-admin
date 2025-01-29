import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "document-type",
    name: "DocumentType",
    component: () => import("@/app/modules/DocumentType/views/index.vue"),
  },
];

export default routes;
