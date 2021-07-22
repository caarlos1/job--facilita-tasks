<template>
  <div class="modal">
    <div class="modal__area">
      <div class="modal__bloco">
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.modal
  display grid
  grid-auto-rows minmax(auto, 100vh)
  position absolute
  top 0
  z-index 1001
  height 100vh
  width 100vw
  background-color rgba(70, 93, 118, 0.6);

.modal__area
  display grid
  grid-template-columns auto 700px auto
  align-self center

.modal__bloco
  grid-column-start: 2;
  background var(--cor-background)
  border-radius 8px
  padding 35px 40px
</style>
