<template>
  <div class="todolist__cabecalho">
    <h2 class="cabecalho__titulo">Minhas Tarefas</h2>
    <p class="cabecalho__sub">
      Olá <span>{{ usuario }}</span>

      <template v-if="numTarefas > 0">
        , você tem
        <span class="sublinhado">
          {{ numTarefas }} tarefa{{ plural(numTarefas) }}
        </span>
        <span> </span>
        pendente{{ plural(numTarefas) }}.
      </template>

      <template v-else>
        , nada de tarefas...
        <span>
          <to-do-list-link-adicionar-tarefa />
        </span>
      </template>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ToDoListLinkAdicionarTarefa from "./ToDoListLinkAdicionarTarefa.vue";
export default {
  components: { ToDoListLinkAdicionarTarefa },
  props: {
    usuario: String,
  },

  methods: {
    plural: (valor) => (valor > 1 ? "s" : ""),
  },

  computed: {
    ...mapGetters("toDoList", ["numeroDeTarefasPendentes"]),

    numTarefas() {
      return this.numeroDeTarefasPendentes;
    },
  },
};
</script>

<style lang="stylus" scoped>
.cabecalho__titulo
  margin 0
  padding 0
  font-size 26px;
  line-height 27px;
  padding-bottom 5px
  color: var(--cor-texto)

.cabecalho__sub
  padding 0
  margin 0
  font-weight: 600
  font-size: 17px
  line-height: 18px
  color: var(--cor-sub-cabecalho)

  a
    text-decoration none

  span
  a
    color: var(--cor-principal)
</style>
