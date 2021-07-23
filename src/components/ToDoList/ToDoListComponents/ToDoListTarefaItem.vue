<template>
  <div>
    <div class="tarefa__escopo">
      <div
        :class="{ 'tarefa--concluida': verificarEstadoTarefa(tarefa) }"
        class="tarefa__bloco"
      >
        <button
          class="tarefa__estado"
          @click="mudarEstadoTarefa(tarefa.id)"
        ></button>

        <h4 class="tarefa__titulo" @click="abrirDescricao(tarefa.id)">
          {{ tarefa.titulo }}
        </h4>

        <div class="tarefa__tipo">
          <span class="tarefa__tags" :class="classPorValor(tarefa.tipo.valor)">
            {{ tarefa.tipo.tag || "" }}
          </span>
        </div>

        <util-tree-dots :funcao="abrirPopMenuAcoes" />

        <div></div>

        <div v-if="tarefaAberta == tarefa.id" class="tarefa__descricao">
          {{ tarefa.descricao || "Essa tarefa não possui descrição..." }}
        </div>
      </div>

      <to-do-list-tarefa-item-menu-acoes
        :id="tarefa.id"
        class="pop__area"
        v-if="popMenuAtivo"
        v-on:meFecha="fecharPopMenuAcoes()"
      />
    </div>
    <util-bloquador-de-tela v-if="popMenuAtivo" :fechar="fecharPopMenuAcoes" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { UtilTarefas } from "../../../util";
import UtilBloquadorDeTela from "../../Utilitarios/UtilBloquadorDeTela.vue";
import UtilTreeDots from "../../Utilitarios/UtilTreeDots.vue";
import ToDoListTarefaItemMenuAcoes from "./ToDoListTarefaItemMenuAcoes.vue";

export default {
  components: {
    ToDoListTarefaItemMenuAcoes,
    UtilBloquadorDeTela,
    UtilTreeDots,
  },
  data() {
    return {
      popMenuAtivo: false,
    };
  },
  props: {
    tarefa: Object,
    tarefaAberta: Number,
  },
  methods: {
    ...mapActions("toDoList", ["mudarEstadoTarefa", "limparTarefas"]),
    classPorValor: (valor) => UtilTarefas.definirClassPorValor(valor),
    verificarEstadoTarefa: (tarefa) => tarefa.concluida,

    abrirPopMenuAcoes() {
      this.popMenuAtivo = true;
    },

    fecharPopMenuAcoes() {
      this.popMenuAtivo = false;
    },

    abrirDescricao(id) {
      this.$emit("abrirDescricaoTarefa", id);
    },
  },
};
</script>

<style lang="stylus" scoped>
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
  cursor pointer

.tarefa__titulo:hover
    color var(--cor-principal)

.tarefa__estado
  height 35px
  width 35px
  background #E2EEF5
  border-radius 5px
  border none
  transition var(--transicao-padrao)
  cursor pointer

.tarefa__tags
  padding 4px 10px
  color var(--cor-texto-claro)
  border-radius 20px
  text-align center
  font-weight: bold;
  font-size: 11px;
  line-height: 12px;

.tarefa__tipo
  align-self center
  text-align right

.tarefa--concluida
  transition var(--transicao-padrao)
  opacity 0.5

  .tarefa__estado
    background: url(../../../assets/icon/concluido.svg)
    background-color: var(--cor-sucesso)
    background-size 20px
    background-position center center
    background-repeat no-repeat
  .tarefa__titulo
    text-decoration line-through

.tarefa__escopo
  position relative

.tarefa__descricao{
  padding 0px 13px
  font-size: 15px;
  line-height: 16px;
}

.pop__area
  z-index 1011
  position absolute
  right -47px
  top 10px
</style>
