<template>
  <a href="#" @click="abrirModalBoxAdicionarTarefas()">Adicionar uma tarefa!</a>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("modalBox", [
      "ativarModalBox",
      "definirTituloModalBox",
      "definirComponenteModal",
    ]),

    abrirModalBoxAdicionarTarefas() {
      this.definirTituloModalBox("Cadastrar Tarefas");
      this.definirComponenteModal("ModalToDoListCadastro");
      this.ativarModalBox();
    },
  },
};
</script>

<style></style>
