<template>
  <div class="modal__confirmacao">
    <div class="confirmacao__botoes">
      <a
        @click.prevent="botaoPrimarioAcao"
        class="botao sucesso--btn confirmacao__botao"
        >{{ botaoPrimario }}</a
      >
      <a
        @click.prevent="botaoSecundarioAcao"
        class="botao perigo--btn confirmacao__botao"
        >{{ botaoSecundario }}</a
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    botaoPrimario: String,
    botaoPrimarioAcao: Function,
    botaoSecundario: String,
    botaoSecundarioAcao: Function,
  },
};
</script>

<style lang="stylus" scoped>
.confirmacao__botoes
  text-align center

.confirmacao__botao
  margin 0px 5px

@media (max-width: 500px)
  .confirmacao__botao
    width 70%
    margin 5px 0
</style>
