<template>
  <menu-secundario-base>
    <template v-slot:titulo> Categorias </template>
    <template v-slot:lista>
      <links-tarefas-categorias />
    </template>
  </menu-secundario-base>
</template>

<script>
import MenuSecundarioBase from "./MenuSecundarioBase.vue";
import LinksTarefasCategorias from "./Links/LinksTarefasCategorias.vue";
export default {
  components: { MenuSecundarioBase, LinksTarefasCategorias },
};
</script>
