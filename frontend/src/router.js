import { createWebHistory, createRouter } from "vue-router";
import CreateMember from "./views/CreateMember.vue";
import WelcomePage from "./views/WelcomePage.vue"
const routes = [
  {
    path: "/",
    name: "WelcomePage",
    component: WelcomePage,
  },
  {
    path: "/CreateMember",
    name: "CreateMember",
    component: CreateMember,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;