<template>
  <div class="botao__bloco">
    <button type="submit" class="botao" :class="classesDinamicas">
      {{ botao || "Enviar" }}
    </button>
  </div>
</template>

<script>
export default {
  created() {
    this.modificarCorBotao(this.cor);
  },
  props: {
    botao: String,
    responsivo: Boolean,
    cor: String,
  },

  data() {
    return {
      classesDinamicas: {
        "botao--100": this.responsivo,
      },
    };
  },

  methods: {
    modificarCorBotao(cor) {
      this.classesDinamicas[cor] = true;
    },
  },
};
</script>

<style lang="stylus" scoped>
.botao__bloco
  margin 20px 0px

.botao
  transition 0.1s linear
  background var(--cor-principal)
  padding 18px
  border none
  border-radius 5px
  color: #FFF
  font-weight 700
  font-size 16px

.botao:hover
.botao:active
  background var(--cor-principal-hover)

.botao--100
  width 100%

.sucesso
  background var(--cor-sucesso)

.sucesso:hover
.sucesso:active
  background var(--cor-sucesso-hover)
</style>
