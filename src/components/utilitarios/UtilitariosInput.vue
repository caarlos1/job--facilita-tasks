<template>
  <div class="input__bloco">
    <label class="input__label" :for="'input_' + nome">{{ descricao }}</label>
    <input
      :id="'input_' + nome"
      class="input__input"
      :type="tipo || 'text'"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    descricao: String,
    nome: String,
    placeholder: String,
    tipo: String,
  },
};
</script>

<style lang="stylus" scoped>
.input__bloco
  margin-top 20px

.input__label
  margin-bottom 10px
  font-weight 600
  font-size 14px
  color var(--cor-label-input)

.input__input
  height 55px
  width 100%
  margin-top 8px
  color var(--cor-label-input)
  background var(--cor-background)
  border 2px solid var(--cor-borda-input)
  box-sizing border-box
  border-radius 5px
  text-indent 20px

.input__input:focus
  outline-color var(--cor-principal)
</style>
