<template>
  <ul class="acoes__lista">
    <li class="ativo">
      <i class="far fa-chart-bar icones"></i> <br />
      Deashboard
    </li>
    <li>
      <i class="far fa-check-circle icones"></i> <br />
      Tarefas
    </li>
    <li>
      <i class="fas fa-cogs icones"></i> <br />
      Configurações
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.acoes__lista
  text-align center
  font-size 12px
  font-weight 700
  padding 0

  li
    border: 1px solid #46A3FF
    list-style none
    padding 20px 10px
    margin 0

  :hover
    background var(--cor-principal-hover)

  .icones
    font-size 30px
    margin-bottom 10px
    width 35px
    margin-bottom 8px

.ativo
  background var(--cor-principal-hover)
  color var(--cor-texto-claro)
</style>
