<template>
  <div class="confirmacao__cabecalho">
    <i class="fas fa-trash-alt confirmacao__icone"></i>

    <h3 class="confirmacao__titulo" v-html="obterTituloModalBox">
      Tem certeza que deseja <span class="cor-perigo">excluir</span> essa
      tarefa?
    </h3>

    <p class="confirmacao__sub">{{ obterSubTituloModalBox }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("modalBox", [
      "obterTituloModalBox",
      "obterSubTituloModalBox",
    ]),
  },
};
</script>

<style lang="stylus" scoped>
.confirmacao__cabecalho
  text-align center

.confirmacao__titulo
  text-align center
  font-weight bold
  font-size 20px
  line-height 21px
  padding 0
  margin 0

.confirmacao__sub
  margin 7px 0 30px 0
  font-weight 600
  font-size 15px
  line-height 16px
  color: #475E78

.confirmacao__icone
  justify-self center
  box-sizing border-box
  height 136px
  width 136px
  background-color #EDF6FC
  padding 35px
  font-size 70px
  border-radius 50%
  margin-bottom  20px
</style>
