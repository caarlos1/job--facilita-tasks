<template>
  <div class="todolist__pesquisa">
    <div class="pesquisa__bloco">
      <form class="pesquisa__formulario">
        <input type="text" placeholder="Buscar Tarefas" name="buscar-tarefas" />
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style lang="stylus" scoped>
.pesquisa__bloco
  margin 20px 0px

.pesquisa__formulario
  display grid
  grid-template-columns auto 60px

  input
    height 50px
    text-indent 20px
    background var(--cor-background-painel)
    border: 2px solid var(--cor-borda-input);
    border-radius 5px 0 0 5px
    border-right none
    outline-color var(--cor-principal)
    font-weight: 600;
    font-size: 17px;
    line-height: 18px;

  input::placeholder
    color var(--cor-borda-input);
    opacity: 1

  button
    padding 0 15px
    border-radius 0 5px 5px 0
    border: 2px solid var(--cor-borda-input);
    border-left none
    background var(--cor-background-painel)
    cursor pointer
  i
    font-size 25px
    color: var(--cor-borda-input)

  :hover i
    color: var(--cor-principal)

  :active i
    color: var(--cor-principal-hover)
</style>
