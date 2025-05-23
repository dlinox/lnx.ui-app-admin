import { type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "recognition",
    name: "Recognition",
    component: () =>
      import("@/app/modules/Recognition/views/RecognitionView.vue"),
  },
];

export default routes;
