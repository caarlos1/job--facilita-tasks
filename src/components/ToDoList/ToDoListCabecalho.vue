<template>
  <div class="todolist__cabecalho">
    <h2 class="cabecalho__titulo">Minhas Tarefas</h2>
    <p class="cabecalho__sub">
      Olá <span>{{ usuario }}</span>
      <template v-if="tp > 0"
        >, você tem
        <span class="sublinhado">{{ tp }} tarefa{{ plural(tp) }}</span
        ><span> </span> pendente{{ plural(tp) }}.</template
      ><template v-else
        >, nada de tarefas...
        <span><a href="#">Adicionar uma tarefa!</a></span></template
      >
    </p>
  </div>
</template>

<script>
export default {
  props: {
    usuario: String,
    tarefasPendentes: Number,
  },
  methods: {
    plural(valor) {
      return valor > 1 ? "s" : "";
    },
  },
  computed: {
    tp() {
      return this.tarefasPendentes;
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
