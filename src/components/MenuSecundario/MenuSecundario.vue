<template>
  <div class="menu-secundario">
    <div class="menu-secundario__bloco">
      <menu-secundario-lista />
    </div>
  </div>
</template>

<script>
import MenuSecundarioLista from "./MenuSecundarioLista.vue";

export default {
  components: { MenuSecundarioLista },
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
