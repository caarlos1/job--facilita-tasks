<template>
  <div class="menu-acoes__pop">
    <div class="pop__bloco">
      <ul>
        <li @click="abirEditorTarefa(id)">Editar</li>
        <li @click="excluirTarefa()">Excluir</li>
      </ul>
    </div>
    <util-tree-dots class="pop__botao" :funcao="fecharMenuPop" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import UtilTreeDots from "../../Utilitarios/UtilTreeDots.vue";
export default {
  components: { UtilTreeDots },
  props: {
    id: Number,
  },
  methods: {
    ...mapMutations("modalBox", ["ativarModalBox", "definirTituloModalBox"]),

    fecharMenuPop() {
      this.$emit("meFecha");
    },

    abirEditorTarefa(id) {
      this.fecharMenuPop();
      this.definirTituloModalBox("Editar Tarefa");
      this.ativarModalBox(id);
    },
  },
};
</script>

<style lang="stylus" scoped>
.menu-acoes__pop
  display grid
  grid-template-columns auto 10px
  background var(--cor-background)
  width 109px
  border-radius 5px
  font-weight: 600;
  font-size: 14px;
  line-height: 25px;
  color #748CA5
  padding 5px 16px
  box-shadow: 0px 0px 8px 2px rgba(49, 81, 113, 0.1);
  ul
    display inline-block
    padding 0
    margin 0
    li
      margin 15px 0
      padding-left 16px
      list-style none
      background-image url('../../../assets/icon/elipse.svg')
      background-size 9px
      background-repeat no-repeat
      background-position center left
      transition var(--transicao-padrao)
      cursor pointer

    li:hover
      background-image url('../../../assets/icon/elipse_check.svg')

.pop__botao
  position absolute
  top 19px
  right 10px
  color var(--cor-principal)
</style>
