// import { createRouter, createWebHistory } from "vue-router";
import JakarTa from "@/view/JakarTa.vue";
import JawaBarat from "@/view/JawaBarat.vue";
import JawaTengah from "@/view/JawaTengah.vue";
import JawaTimur from "@/view/JawaTimur.vue";
import BaLi from "@/view/BaLi.vue";

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const routes = [
  {
    path: "/",
    name: "jakarta",
    component: JakarTa,
  },
  {
    path: "/jabar",
    name: "jabar",
    component: JawaBarat,
  },
  {
    path: "/jateng",
    name: "jateng",
    component: JawaTengah,
  },
  {
    path: "/jatim",
    name: "jatim",
    component: JawaTimur,
  },
  {
    path: "/bali",
    name: "bali",
    component: BaLi,
  },
];
// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

const router = new Router({
  routes,
  mode: "history",
});

export default router;
