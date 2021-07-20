<template>
  <div class="tarefas__area">
    <div
      v-for="tarefa in tarefas"
      :key="tarefa.id"
      class="tarefa__loop"
      :class="{ 'tarefa--finalizada': tarefa.finalizada }"
    >
      <div class="tarefa__bloco">
        <button
          class="tarefa__estado"
          @click="mudarEstadoTarefa(tarefa.id)"
        ></button>
        <h4 class="tarefa__titulo">{{ tarefa.titulo }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tarefas: Array,
  },

  methods: {
    mudarEstadoTarefa(idTarefa) {
      let tarefaPorId = (tarefa) => tarefa.id == idTarefa;
      const tarefaCerta = this.tarefas.find(tarefaPorId);
      tarefaCerta.finalizada = !tarefaCerta.finalizada;
    },
  },
};
</script>

<style lang="stylus" scoped>
.tarefa__loop
  margin 10px 0px

.tarefa__bloco
  display grid;
  grid-template-columns 35px auto
  background var(--cor-background)
  box-shadow var(--sombra-padrao)
  border-radius 5px
  padding 20px 30px

.tarefa__titulo
  padding 0 12px
  margin 0
  align-self center
  font-weight 600
  font-size 15px
  line-height 16px

.tarefa__estado
  height 35px
  width 35px
  background #E2EEF5
  border-radius 5px
  border none

.tarefa--finalizada
  opacity 0.5
  .tarefa__estado
    background: url(../../assets/icon/concluido.svg)
    background-color: var(--cor-sucesso)
    background-size 20px
    background-position center center
    background-repeat no-repeat
  .tarefa__titulo
    text-decoration line-through
</style>
