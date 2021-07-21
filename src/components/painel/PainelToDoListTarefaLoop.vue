<template>
  <div class="tarefas__area">
    <div
      v-for="tarefa in listaDeTarefas"
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
        <div class="tarefa__importancia">
          <span
            class="tarefa__tags"
            :class="tipoDeImportancia(tarefa.importancia.tipo)"
          >
            {{ tarefa.importancia.texto || "" }}
          </span>
        </div>
        <i class="fas fa-ellipsis-v tarefa__acoes"></i>
      </div>
    </div>

    <!-- Botão testes -->
    <a href="#" @click="apagarTarefas">Apagar Tarefas</a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions("toDoList", ["mudarEstadoTarefa", "limparTarefas"]),
    tipoDeImportancia(tipo) {
      switch (tipo) {
        case 1:
          return "primaria";
        case 2:
          return "alerta";
        case 3:
          return "perigo";
        default:
      }
    },
    apagarTarefas() {
      this.limparTarefas();
    },
  },

  computed: {
    ...mapGetters("toDoList", ["listaDeTarefas"]),
  },
};
</script>

<style lang="stylus" scoped>
.tarefa__loop
  margin 10px 0px
  transition var(--transicao-padrao)

.tarefa__bloco
  display grid;
  grid-template-columns 35px auto 110px 20px
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
  transition var(--transicao-padrao)

.tarefa--finalizada
  transition var(--transicao-padrao)
  opacity 0.5
  .tarefa__estado
    background: url(../../assets/icon/concluido.svg)
    background-color: var(--cor-sucesso)
    background-size 20px
    background-position center center
    background-repeat no-repeat
  .tarefa__titulo
    text-decoration line-through

.tarefa__tags
  padding 4px 10px
  color var(--cor-texto-claro)
  border-radius 20px
  text-align center
  font-weight: bold;
  font-size: 11px;
  line-height: 12px;

.tarefa__importancia
  align-self center
  text-align right

.tarefa__acoes
  padding 0px 0 0 20px
  align-self center
  font-size 18px
  color var(--cor-borda-input)
</style>
