<template>
  <modal-base>
    <component v-bind:is="obterComponenteModalAtivo"></component>
  </modal-base>
</template>
<script>
import { mapGetters } from "vuex";

import ModalBase from "./ModalBase.vue";
import ModalToDoListCadastro from "./ModalToDoList/ModalToDoListCadastro.vue";
import ModalToDoListConfirmacao from "./ModalToDoList/ModalToDoListConfirmacao.vue";

export default {
  components: {
    ModalBase,
    ModalToDoListCadastro,
    ModalToDoListConfirmacao,
  },
  computed: {
    ...mapGetters("modalBox", ["obterComponenteModalAtivo"]),
  },
};
</script>
