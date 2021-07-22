<template>
  <modal-base>
    <modal-to-do-list-cabecalho />
    <modal-to-do-list-formulario />
  </modal-base>
</template>
<script>
import ModalBase from "./ModalBase.vue";
import ModalToDoListCabecalho from "./ModalToDoList/ModalToDoListCabecalho.vue";
import ModalToDoListFormulario from "./ModalToDoList/ModalToDoListFormulario.vue";

export default {
  components: { ModalToDoListFormulario, ModalToDoListCabecalho, ModalBase },
};
</script>
