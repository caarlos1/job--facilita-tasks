<template>
  <div class="template__painel">
    <div v-if="modalBoxEstaAtiva" class="container__modal">
      <slot name="modal"></slot>
    </div>

    <div class="container__painel">
      <div class="coluna coluna__menu fundo--cor-principal">
        <slot name="navegacao"></slot>
      </div>

      <div class="navbar__area">
        <slot name="navbar"></slot>
      </div>

      <div class="coluna coluna__painel">
        <div class="painel__area-util">
          <slot name="navegacao-secundaria"></slot>
          <slot name="area-util"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("modalBox", ["modalBoxEstaAtiva"]),
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

.navbar__area
  position absolute
  width 100%

.painel__area-util
  display grid;
  grid-template-columns 250px auto
  grid-auto-rows minmax(auto, 100vh)
</style>
