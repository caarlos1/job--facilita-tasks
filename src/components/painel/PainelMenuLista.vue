<template>
  <div class="lista">
    <h3 class="lista__titulo">{{ tituloLinks }}</h3>
    <ul class="lista__ul">
      <li
        v-for="item in listaDeLinks"
        :key="item.texto"
        :class="{ ativo: item.ativo }"
      >
        <a :href="item.url" class="lista__link"
          ><div class="lista__texto">
            {{ item.texto }}
          </div>
          <div
            class="lista__quantidade"
            :class="item.cor || 'primaria'"
            v-if="item.quantidade > 0"
          >
            {{ item.quantidade }}
          </div></a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tituloLinks: String,
    listaDeLinks: Array,
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
