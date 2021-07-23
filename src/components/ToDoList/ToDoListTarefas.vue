<template>
  <div class="tarefas__area">
    <div class="tarefa__lista">
      <div
        v-for="tarefa in listaFiltradaPorRelevancia()"
        :key="tarefa.id"
        class="tarefa__item"
      >
        <to-do-list-tarefa-item
          :tarefa="tarefa"
          :tarefaAberta="idTarefaDescAberta"
          v-on:abrirDescricaoTarefa="definirTarefaComDescAberta"
        />
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
  mounted() {},
  components: { ToDoListTarefaItem },
  data() {
    return {
      idTarefaDescAberta: null,
    };
  },
  methods: {
    ...mapActions("toDoList", ["limparTarefas"]),

    listaFiltradaPorRelevancia() {
      let tarefas = [...this.listaFiltradaPorBusca()];
      return tarefas.sort((a, b) => {
        if (a.tipo.valor > b.tipo.valor) return -1;
        if (a.tipo.valor < b.tipo.valor) return 1;
        return 0;
      });
    },

    listaFiltradaPorBusca() {
      const busca = this.obterValorDeBusca;
      if (busca) {
        let tarefas = this.obterLista();
        return tarefas.filter((tarefa) => {
          return (
            tarefa.titulo.toUpperCase().match(busca.toUpperCase()) ||
            tarefa.descricao.toUpperCase().match(busca.toUpperCase())
          );
        });
      } else return this.obterLista();
    },

    obterLista() {
      const tipo = this.buscarTipoDeTarefasPelaURL;
      return UtilTarefas.definirListaPorTipo(tipo, this);
    },

    definirTarefaComDescAberta(id) {
      this.idTarefaDescAberta = id;
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
      "listaDeTarefasExcluidas",
    ]),
    ...mapGetters("busca", ["obterValorDeBusca"]),

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
