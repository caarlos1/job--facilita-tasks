<template>
  <div>
    <modal-to-do-list-confirmacao-cabecalho />
    <modal-to-do-list-confirmacao-botoes
      botaoPrimario="Cancelar"
      :botaoPrimarioAcao="desativarModalBox"
      botaoSecundario="Confirmar"
      :botaoSecundarioAcao="excluirTarefaPorId"
    />
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import ModalToDoListConfirmacaoBotoes from "./ModalToDoListConfirmacao/ModalToDoListConfirmacaoBotoes.vue";
import ModalToDoListConfirmacaoCabecalho from "./ModalToDoListConfirmacao/ModalToDoListConfirmacaoCabecalho.vue";

export default {
  components: {
    ModalToDoListConfirmacaoBotoes,
    ModalToDoListConfirmacaoCabecalho,
  },
  methods: {
    ...mapMutations("modalBox", ["desativarModalBox"]),
    ...mapActions("toDoList", ["excluirTarefa", "recuperarTarefa"]),

    excluirTarefaPorId() {
      this.excluirTarefa(this.obterIdModalBox);
      this.desativarModalBox();
    },
  },
  computed: {
    ...mapGetters("modalBox", ["obterIdModalBox"]),
  },
};
</script>
