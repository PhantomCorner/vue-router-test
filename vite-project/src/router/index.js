import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
import Eggs from "../views/Eggs.vue";
import NotFound from "../views/NotFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: home },
    {
      path: "/eggs/:eggType",
      component: Eggs,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
    {
      path: "/404",
      name: "404",
      component: NotFound,
    },
  ],
});
export default router;
