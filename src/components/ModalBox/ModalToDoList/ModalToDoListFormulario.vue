<template>
  <form class="modal__formulario" @submit.prevent="adicionarTarefaLista">
    <!-- ... -->
    <div class="input__bloco">
      <label class="input__label" for="descricao-tarefa">Título:</label>
      <input class="input__input" type="text" v-model="tarefa.titulo" />
    </div>

    <div class="input__bloco">
      <label class="input__label" for="descricao-tarefa">Descrição:</label>
      <textarea
        v-model="tarefa.descricao"
        class="input__base input__textarea"
        name="descricao-tarefa"
        id="descricao-tarefa"
        cols="30"
        rows="10"
      ></textarea>
    </div>

    <div class="modal__acoes">
      <div class="modal__radio">
        <input
          v-model="tarefa.valor"
          class="radio__input"
          id="valor-valor"
          type="radio"
          :value="2"
        />
        <label class="radio__label" for="valorChoice1">Importante</label>

        <input
          v-model="tarefa.valor"
          class="radio__input"
          id="valor-valor"
          type="radio"
          :value="3"
        />
        <label class="radio__label" for="valorChoice1">Urgente</label>
      </div>

      <div class="modal__botoes">
        <util-botao
          class="modal__botao"
          cor="sucesso--btn"
          botao="Adicionar"
          tipo="submit"
        />
      </div>
      <!-- ... -->
    </div>
  </form>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import UtilBotao from "../../Utilitarios/UtilBotao.vue";
import { UtilTarefas } from "../../../util";

export default {
  components: { UtilBotao },

  data() {
    return {
      tarefa: {
        titulo: "",
        descricao: "",
        valor: 1,
      },
    };
  },
  methods: {
    ...mapActions("toDoList", ["adicionarTarefa"]),
    ...mapMutations("modalBox", ["desativarModalBox"]),

    adicionarTarefaLista() {
      let tarefa = { ...this.tarefa };
      let valor = tarefa.valor;
      delete tarefa.valor;

      tarefa.tipo = {
        valor,
        tag: UtilTarefas.definirTagPorValor(valor),
      };

      this.adicionarTarefa(tarefa);
      this.desativarModalBox();
    },
  },
};
</script>

<style lang="stylus" scoped>
.modal__acoes
  display grid
  grid-template-columns auto auto
  padding-top 15px

.modal__botoes
  text-align right

.modal__botao
  margin 0 0 0 5px
</style>
