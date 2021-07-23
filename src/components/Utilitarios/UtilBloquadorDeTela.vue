<template>
  <div class="bloquador__area">
    <div @click="fechar()" class="bloqueador__tela"></div>
  </div>
</template>

<script>
export default {
  props: {
    fechar: Function,
  },
};
</script>

<style lang="stylus" scoped>
.bloqueador__area
  position relative

.bloqueador__tela
  z-index 1010
  position absolute
  height 100vh
  width 100vw
  top 0
  right 0
  background black
  opacity 0.05
</style>
