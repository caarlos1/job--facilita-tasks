<template>
  <div class="menu">
    <div class="menu__logo">
      <menu-de-navegacao-logo titulo="FacilitaTasks" url="/painel" />
    </div>
    <div class="menu__acoes">
      <menu-de-navegacao-links />
    </div>
  </div>
</template>

<script>
import MenuDeNavegacaoLogo from "./MenuDeNavegacaoLogo.vue";
import MenuDeNavegacaoLinks from "./MenuDeNavegacaoLinks.vue";

export default {
  components: { MenuDeNavegacaoLogo, MenuDeNavegacaoLinks },
};
</script>

<style lang="stylus" scoped>
.menu
  display grid

.menu__logo
  max-height 106px

@media (max-width: 1100px)
  .menu
    display block
    grid-template-columns 25fr 75fr
    padding 30px

  .menu__logo
    max-height 200px
    margin 0
    padding 0
</style>
