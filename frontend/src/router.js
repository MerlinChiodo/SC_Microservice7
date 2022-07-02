import { createWebHistory, createRouter } from "vue-router";
import CreateMember from "./views/CreateMember.vue";
import WelcomePage from "./views/WelcomePage.vue";
import EmployeeSite from "./views/EmployeeSite.vue";
import ChangeAboutUs from "./views/ChangeAboutUs.vue";
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
  },
  {
    path: "/EmployeeSite",
    name: "EmployeeSite",
    component: EmployeeSite,
  },
  {
    path: "/ChangeAboutUs",
    name: "ChangeAboutUs",
    component: ChangeAboutUs,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;