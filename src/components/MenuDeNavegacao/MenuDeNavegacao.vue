<template>
  <div class="menu">
    <div class="menu__logo">
      <menu-de-navegacao-logo titulo="FacilitaTasks" url="/painel" />
    </div>
    <div class="menu__acoes">
      <painel-menu-acoes />
    </div>
  </div>
</template>

<script>
import MenuDeNavegacaoLogo from "./MenuDeNavegacaoLogo.vue";
import PainelMenuAcoes from "./PainelMenuAcoes.vue";

export default {
  components: { MenuDeNavegacaoLogo, PainelMenuAcoes },
};
</script>

<style lang="stylus" scoped>
.menu
  display grid

.menu__logo
  max-height 106px
</style>
