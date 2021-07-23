<template>
  <div class="todolist">
    <div class="botao__adicionar">
      <to-do-list-botao-modal />
    </div>
    <div class="todolist__bloco">
      <to-do-list-cabecalho usuario="Carlos Roberto" />
      <to-do-list-busca />
      <to-do-list-tarefas />
    </div>
  </div>
</template>

<script>
import ToDoListBotaoModal from "./ToDoListComponents/ToDoListBotaoModal.vue";
import ToDoListCabecalho from "./ToDoListComponents/ToDoListCabecalho.vue";
import ToDoListBusca from "./ToDoListBusca.vue";
import ToDoListTarefas from "./ToDoListTarefas.vue";
export default {
  components: {
    ToDoListCabecalho,
    ToDoListBusca,
    ToDoListTarefas,
    ToDoListBotaoModal,
  },
};
</script>

<style lang="stylus" scoped>
.todolist
  display grid;
  grid-template-columns auto 650px auto
  grid-auto-rows minmax(auto, 100vh)

.todolist__bloco
  margin-top 25vh
  // align-self center
  grid-column-start 2

.botao__adicionar
  position absolute
  right 28px
  bottom 28px
</style>
