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

import "@fortawesome/fontawesome-free/css/all.css";

import { mapActions } from "vuex";
import { buscarTarefasCache, limparTarefasCache } from "./util";

export default {
  mounted() {
    const tarefas = buscarTarefasCache();
    if (tarefas) {
      if (tarefas.length > 0) this.atualizarTarefas(tarefas);
      else limparTarefasCache();
    }
  },
  methods: {
    ...mapActions("toDoList", ["atualizarTarefas"]),
  },
};
</script>
