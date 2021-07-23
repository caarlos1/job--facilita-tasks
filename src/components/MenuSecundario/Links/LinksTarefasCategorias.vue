<template>
  <ul class="lista__ul">
    <li id="link-tarefas__padrao">
      <a href="/tarefas" class="lista__link">
        <div class="lista__texto">Todas</div>
      </a>
    </li>

    <li id="link-tarefas__urgentes">
      <a href="/tarefas/pendentes" class="lista__link">
        <div class="lista__texto">Pendentes</div>
        <div
          v-if="numeroDeTarefasPendentes > 0"
          class="lista__quantidade primaria"
        >
          {{ numeroDeTarefasPendentes }}
        </div>
      </a>
    </li>

    <li id="link-tarefas__urgentes">
      <a href="/tarefas/urgentes" class="lista__link">
        <div class="lista__texto">Urgentes</div>
        <div
          v-if="numeroDeTarefasUrgentes > 0"
          class="lista__quantidade perigo"
        >
          {{ numeroDeTarefasUrgentes }}
        </div>
      </a>
    </li>

    <li id="link-tarefas__importantes">
      <a href="/tarefas/importantes" class="lista__link">
        <div class="lista__texto">Importantes</div>
        <div
          v-if="numeroDeTarefasImportantes > 0"
          class="lista__quantidade alerta"
        >
          {{ numeroDeTarefasImportantes }}
        </div>
      </a>
    </li>

    <li id="link-tarefas__outras">
      <a href="/tarefas/outras" class="lista__link">
        <div class="lista__texto">Outras</div>
      </a>
    </li>
    <li id="link-tarefas__finalizadas">
      <a href="/tarefas/finalizadas" class="lista__link">
        <div class="lista__texto">Finalizadas</div>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("toDoList", [
      "numeroDeTarefasUrgentes",
      "numeroDeTarefasImportantes",
      "numeroDeTarefasPendentes",
    ]),
  },
};
</script>

<style lang="stylus" scoped>
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
  background-image url('../../../assets/icon/arrow.svg')
  background-size 8px
  background-repeat no-repeat
  background-position center left
  transition var(--transicao-padrao)

.lista__link:hover
.ativo .lista__link
  color: var(--cor-principal)
  background-image url('../../../assets/icon/arrow_check.svg')

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

@media (max-width: 1100px)
  .lista__ul
    display block
    max-width auto
    overflow-y hidden
    overflow-x: scroll;

  .lista__ul li
    display inline-block
</style>
