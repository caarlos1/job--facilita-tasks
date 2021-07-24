<template>
  <div class="menu-secundario">
    <div class="menu-secundario__bloco">
      <div class="lista">
        <h3 class="lista__titulo">
          <slot name="titulo"> </slot>
        </h3>
        <slot name="lista"> </slot>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.menu-secundario
  display grid
  background var(--cor-menu-secundario)
  box-shadow var(--sombra-padrao)

.menu-secundario__bloco
  align-self center

.lista
  padding 30px
  font-weight 600;
  font-size 15px;
  line-height 25px;

.lista__titulo
  margin-bottom 50px
  font-weight: bold;
  font-size: 17px;
  line-height: 18px;
  color #4E5F70
</style>
