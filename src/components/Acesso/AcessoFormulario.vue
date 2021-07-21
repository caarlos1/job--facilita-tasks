<template>
  <form action="/painel">
    <h3 class="formulario__titulo">{{ titulo }}</h3>
    <utilitarios-input descricao="Nome de usuário ou e-mail:" nome="usuario" />
    <utilitarios-input descricao="Senha:" nome="senha" tipo="password" />
    <utilitarios-botao :botao="botao" :responsivo="true" cor="sucesso--btn" />
  </form>
</template>

<script>
import UtilitariosBotao from "../Utilitarios/UtilitariosBotao.vue";
import UtilitariosInput from "../Utilitarios/UtilitariosInput.vue";

export default {
  components: { UtilitariosInput, UtilitariosBotao },
  props: {
    titulo: String,
    botao: String,
  },
};
</script>
<style lang="stylus" scoped>
.formulario__titulo
  font-width 700
  font-size 18px
  color var(--cor-texto)
</style>
