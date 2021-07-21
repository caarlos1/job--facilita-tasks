<template>
  <div class="lista">
    <h3 class="lista__titulo">Categorias</h3>
    <ul class="lista__ul">
      <li class="ativo">
        <a href="/painel" class="lista__link">
          <div class="lista__texto">Todas</div>
        </a>
      </li>
      <li>
        <a href="/painel/urgentes" class="lista__link">
          <div class="lista__texto">Urgentes</div>
          <div
            v-if="numeroTarefasUrgentes > 0"
            class="lista__quantidade perigo"
          >
            {{ numeroTarefasUrgentes }}
          </div>
        </a>
      </li>
      <li>
        <a href="/painel/importantes" class="lista__link">
          <div class="lista__texto">Importantes</div>
          <div
            v-if="numeroTarefasImportantes > 0"
            class="lista__quantidade alerta"
          >
            {{ numeroTarefasImportantes }}
          </div>
        </a>
      </li>
      <li>
        <a href="/painel/outras" class="lista__link">
          <div class="lista__texto">Outras</div>
        </a>
      </li>
      <li>
        <a href="/painel/finalizadas" class="lista__link">
          <div class="lista__texto">Finalizadas</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("toDoList", [
      "listarTarefasUrgentes",
      "listarTarefasImportantes",
    ]),

    numeroTarefasUrgentes() {
      const tarefas = this.listarTarefasUrgentes;
      return tarefas.length;
    },

    numeroTarefasImportantes() {
      const tarefas = this.listarTarefasImportantes;
      return tarefas.length;
    },
  },
};
</script>

<style lang="stylus" scoped>
.lista
  padding 40px
  font-weight 600;
  font-size 15px;
  line-height 25px;

.lista__ul
  padding 0
  margin 0

  li
    padding 0
    margin 0
    list-style none

.lista__link
  display inline-block
  box-sizing border-box
  color var(--cor-texto)
  padding 8px 20px
  margin 0
  text-decoration none
  background-image url('../../assets/icon/arrow_normal.svg')
  background-size 8px
  background-repeat no-repeat
  background-position center left
  transition var(--transicao-padrao)

.lista__link:hover
.ativo .lista__link
  color: var(--cor-principal)
  background-image url('../../assets/icon/arrow_destaque.svg')

.lista__titulo
  margin-bottom 50px
  font-weight: bold;
  font-size: 17px;
  line-height: 18px;
  color #4E5F70

.lista__texto
  padding-right 10px
  float left

.lista__quantidade
  --tamanho-cirulo: 25px
  box-sizing border-box
  height var(--tamanho-cirulo)
  width var(--tamanho-cirulo)
  font-weight: bold;
  font-size: 11px;
  line-height: calc(var(--tamanho-cirulo) + 1px);
  border-radius 50%
  text-align center
  color: var(--cor-texto-claro)
  float left
</style>
