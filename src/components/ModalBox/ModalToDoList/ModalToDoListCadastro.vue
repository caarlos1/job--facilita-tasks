<template>
  <div>
    <modal-to-do-list-cabecalho />
    <modal-to-do-list-formulario />
  </div>
</template>
<script>
import ModalToDoListCabecalho from "./ModalToDoListCadastro/ModalToDoListCadastroCabecalho.vue";
import ModalToDoListFormulario from "./ModalToDoListCadastro/ModalToDoListCadastroFormulario.vue";

export default {
  components: { ModalToDoListFormulario, ModalToDoListCabecalho },
};
</script>
