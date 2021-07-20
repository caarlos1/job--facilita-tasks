<template>
  <div class="container__painel">
    <div class="coluna coluna__menu fundo--cor-principal">
      <painel-menu-principal />
    </div>

    <div class="coluna__barra">
      <painel-barra-topo />
    </div>

    <div class="coluna coluna__painel">
      <painel-ferramentas />
    </div>
  </div>
</template>

<script>
import PainelBarraTopo from "../components/painel/PainelBarraTopo.vue";
import PainelMenuPrincipal from "../components/painel/PainelMenuPrincipal.vue";
import PainelFerramentas from "../components/painel/PainelFerramentas.vue";

export default {
  name: "Painel_Principal",
  components: {
    PainelBarraTopo,
    PainelMenuPrincipal,
    PainelFerramentas,
  },
};
</script>

<style lang="stylus" scoped>
.container__painel
  display grid;
  grid-template-columns 106px 20fr
  grid-auto-rows minmax(auto, 100vh)
  background var(--cor-background-painel)

.coluna__painel
  display grid;
  width 100%
  grid-template-columns 1fr
  grid-auto-columns minmax(auto 100%)
  align-self start
  padding 0

.coluna__menu
  padding 0
  z-index 1000

.coluna__barra
  position absolute
  width 100%
</style>
