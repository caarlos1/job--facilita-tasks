<template>
  <div class="painel__ferramentas">
    <painel-menu-secundario />
    <to-do-list />
  </div>
</template>

<script>
import PainelMenuSecundario from "./PainelMenuSecundario.vue";
import ToDoList from "../ToDoList/ToDoList.vue";
export default {
  components: { PainelMenuSecundario, ToDoList },
};
</script>

<style lang="stylus" scoped>
.painel__ferramentas
  display grid;
  grid-template-columns 250px auto
  grid-auto-rows minmax(auto, 100vh)
</style>
