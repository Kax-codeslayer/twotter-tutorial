import loginForm from "@/components/login-form.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import filter from "@/views/filter.vue";


Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "Login",
    component: loginForm
  },
  {
    path: "/filter",
    name: "Filter",
    component: filter
  }

];

const router = new VueRouter({
  routes
});

export default router;
