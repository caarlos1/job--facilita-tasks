<template>
  <div class="tarefas__area">
    <div class="tarefa__lista">
      <div v-for="tarefa in obterLista()" :key="tarefa.id" class="tarefa__item">
        <to-do-list-tarefa-item :tarefa="tarefa" />
      </div>
    </div>

    <!-- Botão testes -->
    <a href="#" @click="limparTarefas">Apagar Tarefas</a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Util, UtilTarefas } from "../../util";
import ToDoListTarefaItem from "./ToDoListComponents/ToDoListTarefaItem.vue";

export default {
  components: { ToDoListTarefaItem },
  methods: {
    ...mapActions("toDoList", ["limparTarefas"]),

    obterLista() {
      const tipo = this.buscarTipoDeTarefasPelaURL;
      return UtilTarefas.definirListaPorTipo(tipo, this);
    },
  },

  computed: {
    ...mapGetters("toDoList", [
      "listaDeTarefas",
      "listaDeTarefasImportantes",
      "listaDeTarefasUrgentes",
      "listaDeTarefasOutras",
      "listaDeTarefasFinalizadas",
      "listaDeTarefasPendentes",
    ]),

    buscarTipoDeTarefasPelaURL() {
      const parametros = this.$route.params;
      return Util.isObjetoVazio(parametros) > 0 ? parametros.tipo : "";
    },
  },
};
</script>

<style lang="stylus" scoped>
.tarefa__lista
  max-height 435px
  overflow-y: auto;
  margin-bottom 20px

.tarefa__lista::-webkit-scrollbar
  width 20px

.tarefa__lista::-webkit-scrollbar-track
  background transparent
.tarefa__lista::-webkit-scrollbar-thumb
  background-color var(--cor-background)
  border-radius 20px
  border 7px solid var(--cor-background-painel)

.tarefa__item
  margin 10px 0px
  transition var(--transicao-padrao)
</style>
