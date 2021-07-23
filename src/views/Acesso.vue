<template>
  <template-acesso>
    <template v-slot:cabecalho>
      <acesso-cabecalho />
    </template>

    <template v-slot:formulario>
      <acesso-formulario />
    </template>
  </template-acesso>
</template>

<script>
import AcessoCabecalho from "../components/Acesso/AcessoCabecalho.vue";
import AcessoFormulario from "../components/Acesso/AcessoFormulario.vue";
import TemplateAcesso from "../components/Templates/TemplateAcesso.vue";

export default {
  titulo: "Acesso - Facilita Tasks",
  components: { TemplateAcesso, AcessoCabecalho, AcessoFormulario },
};
</script>
