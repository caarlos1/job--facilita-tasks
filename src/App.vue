<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// Arquivos CSS de Suporte
import "normalize.css";

// Aqruivso Stylus
import "./assets/css/root.styl";
import "./assets/css/fonts.styl";
import "./assets/css/style.styl";
import "./assets/css/util.styl";

import "@fortawesome/fontawesome-free/css/all.css";

import { TarefasCache } from "./store/modules/ToDoList/ToDoListClasses";
import { mapActions } from "vuex";

export default {
  mounted() {
    const tarefas = TarefasCache.buscarTarefasCache();
    if (tarefas) {
      if (tarefas.length > 0) this.atualizarTarefas(tarefas);
      else this.popularTarefas();
    } else this.popularTarefas();
  },
  methods: {
    ...mapActions("toDoList", ["atualizarTarefas", "popularTarefas"]),
  },
};
</script>
