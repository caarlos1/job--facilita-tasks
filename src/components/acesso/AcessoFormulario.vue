<template>
  <form action="/painel">
    <h3 class="formulario__titulo">{{ titulo }}</h3>
    <input-utilitarios descricao="Nome de usuário ou e-mail:" nome="usuario" />
    <input-utilitarios descricao="Senha:" nome="senha" tipo="password" />
    <botao-utilitarios :botao="botao" :responsivo="true" cor="sucesso--btn" />
  </form>
</template>

<script>
import BotaoUtilitarios from "../utilitarios/BotaoUtilitarios.vue";
import InputUtilitarios from "../utilitarios/InputUtilitarios.vue";

export default {
  components: { InputUtilitarios, BotaoUtilitarios },
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
