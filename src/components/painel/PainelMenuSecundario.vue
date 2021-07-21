<template>
  <div class="menu-secundario">
    <div class="menu-secundario__bloco">
      <painel-menu-lista />
    </div>
  </div>
</template>

<script>
import PainelMenuLista from "./PainelMenuLista.vue";

export default {
  components: { PainelMenuLista },
};
</script>

<style lang="stylus" scoped>
.menu-secundario
  display grid
  background var(--cor-menu-secundario)
  box-shadow var(--sombra-padrao)

.menu-secundario__bloco
  align-self center
</style>
