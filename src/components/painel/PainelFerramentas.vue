<template>
  <div class="painel__ferramentas">
    <painel-menu-secundario />
    <painel-to-do-list />
  </div>
</template>

<script>
import PainelMenuSecundario from "./PainelMenuSecundario.vue";
import PainelToDoList from "./PainelToDoList.vue";
export default {
  components: { PainelMenuSecundario, PainelToDoList },
};
</script>

<style lang="stylus" scoped>
.painel__ferramentas
  display grid;
  grid-template-columns 250px auto
  grid-auto-rows minmax(auto, 100vh)
</style>
