<template>
  <template-painel>
    <template v-slot:navegacao>
      <menu-de-navegacao />
    </template>

    <template v-slot:navegacao-secundaria>
      <menu-secundario />
    </template>

    <template v-slot:navbar>
      <navbar-usuario />
    </template>

    <!-- Conteúdo da Página -->
    <template v-slot:area-util>
      <to-do-list />
    </template>

    <!-- fim -->
  </template-painel>
</template>

<script>
import MenuDeNavegacao from "../components/MenuDeNavegacao/MenuDeNavegacao.vue";
import MenuSecundario from "../components/MenuSecundario/MenuSecundario.vue";
import NavbarUsuario from "../components/NavbarUsuario/NavbarUsuario.vue";
import TemplatePainel from "../components/Templates/TemplatePainel.vue";
import ToDoList from "../components/ToDoList/ToDoList.vue";

export default {
  components: {
    MenuDeNavegacao,
    NavbarUsuario,
    MenuSecundario,
    ToDoList,
    TemplatePainel,
  },
};
</script>
