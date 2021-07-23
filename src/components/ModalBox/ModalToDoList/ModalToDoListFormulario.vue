<template>
  <form class="modal__formulario" @submit.prevent="adicionarTarefaLista">
    <input type="hidden" id="tipo" v-model="tarefa.id" />
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
          v-model="tarefa.tipo.valor"
          class="radio__input"
          id="valor-valor"
          type="radio"
          :value="2"
        />
        <label class="radio__label" for="valorChoice1">Importante</label>

        <input
          v-model="tarefa.tipo.valor"
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
          :botao="botao"
          tipo="submit"
        />
      </div>
      <!-- ... -->
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import UtilBotao from "../../Utilitarios/UtilBotao.vue";
import { UtilTarefas } from "../../../util";

export default {
  components: { UtilBotao },
  async mounted() {
    const id = this.obterIdModalBox;
    if (id) {
      this.tarefa = await this.obterTarefaPorId(id);
      this.botao = "Editar Tarefa";
    }
  },
  data() {
    return {
      botao: "Adicionar",
      tarefa: {
        id: null,
        titulo: "",
        descricao: "",
        tipo: {
          valor: 1,
        },
      },
    };
  },
  computed: {
    ...mapGetters("modalBox", ["obterIdModalBox"]),
  },
  methods: {
    ...mapActions("toDoList", [
      "adicionarTarefa",
      "atualizarTarefa",
      "obterTarefaPorId",
    ]),
    ...mapMutations("modalBox", ["desativarModalBox"]),

    adicionarTarefaLista() {
      let tarefa = { ...this.tarefa };
      let valor = tarefa.tipo.valor;

      tarefa.tipo = {
        valor,
        tag: UtilTarefas.definirTagPorValor(valor),
      };

      if (tarefa.id) this.atualizarTarefa(tarefa);
      else this.adicionarTarefa(tarefa);

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
