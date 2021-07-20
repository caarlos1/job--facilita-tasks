<template>
  <div class="todolist">
    <div class="todolist__bloco">
      <painel-to-do-list-cabecalho
        usuario="Carlos Roberto"
        :tarefasPendentes="2"
      />
      <painel-to-do-list-pesquisa />
      <painel-to-do-list-tarefas />
    </div>
  </div>
</template>

<script>
import PainelToDoListCabecalho from "./PainelToDoListCabecalho.vue";
import PainelToDoListPesquisa from "./PainelToDoListPesquisa.vue";
import PainelToDoListTarefas from "./PainelToDoListTarefas.vue";
export default {
  components: {
    PainelToDoListCabecalho,
    PainelToDoListPesquisa,
    PainelToDoListTarefas,
  },
};
</script>

<style lang="stylus" scoped>
.todolist
  display grid;
  grid-template-columns auto 650px auto
  grid-auto-rows minmax(auto, 100vh)

.todolist__bloco
  align-self center
  grid-column-start 2
</style>
