<template>
  <div class="container__acesso">
    <div class="coluna fundo--cor-principal">
      <div class="acesso__cabecalho">
        <slot name="cabecalho"> </slot>
      </div>
    </div>
    <div class="coluna container__formulario">
      <div class="acesso__formulario">
        <slot name="formulario"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
// Configuração dos container da página.
.container__formulario
  grid-template-columns 1fr 1fr 1fr

.container__acesso
  display grid;
  grid-template-columns 4fr 8fr
  grid-auto-rows minmax(auto, 100vh)
  grid-column-gap 10px

// Configuração dos grids do conteúdo das colunas.
.acesso__cabecalho
  justify-self center
  align-self center

.acesso__formulario
  grid-column-start 2
  align-self center
  width 100%

// @medias responsáveis pela responsividade.
@media (max-width: 1300px)
  .container__formulario
    grid-template-columns 0.5fr 1fr 0.5fr

  .acesso__formulario
    grid-column-start 2

@media (max-width: 992px)
  .container__formulario
    grid-template-columns 1fr

  .acesso__formulario
    grid-column-start 1

@media (max-width: 768px)
  .acesso__cabecalho
    padding: 30px 0

  .container__acesso
    grid-template-columns 1fr
    grid-auto-rows minmax(auto, auto)
</style>
