<template>
  <form action="/tarefas">
    <h3 class="formulario__titulo">Entre com seus dados de acesso.</h3>

    <div class="input__bloco">
      <label class="input__label" for="'input_usuario' + nome"
        >Nome de usuário ou e-mail:</label
      >
      <input
        v-model="usuario"
        id="'input_usuario' + nome"
        class="input__base input__input"
        type="text"
      />
    </div>

    <div class="input__bloco">
      <label class="input__label" for="'input_senha' + nome">Senha:</label>
      <input
        v-model="senha"
        id="'input_senha' + nome"
        class="input__base input__input"
        type="password"
      />
    </div>

    <div class="botao__bloco">
      <util-botao botao="Enviar" :responsivo="true" cor="sucesso--btn" />
    </div>
  </form>
</template>

<script>
import UtilBotao from "../Utilitarios/UtilBotao.vue";

export default {
  components: { UtilBotao },
  data() {
    return {
      usuario: "",
      senha: "",
    };
  },
};
</script>

<style lang="stylus" scoped>
.formulario__titulo
  font-width 700
  font-size 18px
  color var(--cor-texto)
</style>
