<template>
  <form action="/tarefas">
    <h3 class="formulario__titulo">{{ titulo }}</h3>
    <util-input descricao="Nome de usuário ou e-mail:" nome="usuario" />
    <util-input descricao="Senha:" nome="senha" tipo="password" />
    <util-botao :botao="botao" :responsivo="true" cor="sucesso--btn" />
  </form>
</template>

<script>
import UtilBotao from "../Utilitarios/UtilBotao.vue";
import UtilInput from "../Utilitarios/UtilInput.vue";

export default {
  components: { UtilInput, UtilBotao },
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
