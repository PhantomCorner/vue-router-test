import { createApp } from "vue";
import { createRouter } from "vue-router";
import "./style.css";
import App from "./App.vue";
const router = createRouter({
  routes: [
    { path: "/", component: Home },
    {
      path: "/path1",
      component: path1,
    },
  ],
});
createApp(App).mount("#app");
