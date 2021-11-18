/** @format */

import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home";
import About from "../components/HelloWorld";
const routes = [
  {
    path: "/",
    name: "Usman",
    component: Home,
  },
  {
    path: "/about",
    name: "About Page",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});
export default router;
