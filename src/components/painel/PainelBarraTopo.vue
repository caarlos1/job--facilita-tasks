<template>
  <div class="barra__conteudo">
    <div>
      <!-- Espaço útil da barra -->
    </div>
    <painel-usuario
      fotoUsuario="https://gravatar.com/avatar/9a82ba52769cbc22951a7cf516124307?s=50"
      nomeUsuario="Carlos Roberto da Silva Júnior"
      cargoUsuario="Desenvolvedor Front-End"
    />
  </div>
</template>

<script>
import PainelUsuario from "./PainelUsuario.vue";
export default {
  components: { PainelUsuario },
};
</script>

<style lang="stylus" scoped>
.barra__conteudo
  display grid;
  grid-template-columns auto 300px
  box-sizing border-box
  max-height 85px
  padding 15px 30px
  margin-bottom: 10px
  background var(--cor-background)
  box-shadow var(--sombra-padrao)
</style>
