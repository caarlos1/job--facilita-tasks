<template>
  <div>
    <button
      id="adicionar-tarefa"
      @click="abrirModalBoxAdicionarTarefas()"
      class="botao__adicionar"
    >
      <span><i class="fas fa-plus"></i></span>
    </button>
  </div>
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

<style lang="stylus" scoped>
.botao__adicionar
  height 77px
  width 77px
  border-radius 50%
  box-sizing border-box
  background #0ED984
  text-align center
  padding 22px
  font-size 35px
  color: var(--cor-texto-claro)
  cursor pointer
  border none

.botao__adicionar:disabled
  opacity 0.5
</style>
