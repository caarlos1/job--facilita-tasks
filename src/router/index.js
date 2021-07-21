import Vue from "vue";
import VueRouter from "vue-router";
import Acesso from "../views/Acesso.vue";
import Painel from "../views/Painel.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Página de Acesso",
    component: Acesso,
  },
  {
    path: "/painel",
    name: "Painel Principal",
    component: Painel,
  },
  {
    path: "/painel/:tipo",
    component: Painel,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
