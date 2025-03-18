import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
import Eggs from "../views/Eggs.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: home },
    {
      path: "/eggs/:eggType",
      component: Eggs,
    },
  ],
});
export default router;
