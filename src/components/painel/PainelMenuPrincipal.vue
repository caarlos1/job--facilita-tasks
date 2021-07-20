<template>
  <div class="menu">
    <div class="menu__logo">
      <painel-logo titulo="FacilitaTasks" url="/painel" />
    </div>
    <div class="menu__acoes">
      <painel-menu-acoes />
    </div>
  </div>
</template>

<script>
import PainelLogo from "./PainelLogo.vue";
import PainelMenuAcoes from "./PainelMenuAcoes.vue";

export default {
  components: { PainelLogo, PainelMenuAcoes },
};
</script>

<style lang="stylus" scoped>
.menu
  display grid
</style>
