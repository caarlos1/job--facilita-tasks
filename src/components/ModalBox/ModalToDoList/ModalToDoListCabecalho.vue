<template>
  <div class="modal__cabecalho">
    <h3 class="modal__titulo">{{ obterTituloModalBox }}</h3>
    <div class="modal__fechar">
      <i class="fas fa-times" @click="desativarModalBox()"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("modalBox", ["desativarModalBox"]),
  },
  computed: {
    ...mapGetters("modalBox", ["obterTituloModalBox"]),
  },
};
</script>

<style lang="stylus" scoped>
.modal__cabecalho
  display grid
  grid-template-columns auto 20px
  grid-grid-auto-columns max-content

.modal__titulo
  margin 0 0 25px 0
  font-size 25px

.modal__fechar
  margin-top -20px
  margin-right -22px
  text-align right
  i
   font-size 15px
   color var(--cor-label-input)
   cursor pointer
</style>
