<template>
  <div class="usuario">
    <img class="usuario__foto" :src="fotoUsuario" :alt="nomeUsuario" />
    <div class="usuario__informacoes">
      <h4 class="usuario__nome">
        {{ nomeUsuario }}
      </h4>
      <p class="usuario__cargo">
        {{ cargoUsuario }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nomeUsuario: String,
    cargoUsuario: String,
    fotoUsuario: String,
  },
};
</script>

<style lang="stylus" scoped>
.usuario
  box-sizing border-box
  grid-template-columns 50px auto
  display grid;

.usuario__foto
  height 100%
  border-radius 50%

.usuario__informacoes
  box-sizing border-box
  padding: 0px 15px
  align-self center
  text-align left

.usuario__nome,
.usuario__cargo
  padding 0px
  margin 0px

.usuario__nome
  font-weight 600;
  font-size 15px;
  line-height 16px;

.usuario__cargo
  font-weight 600;
  font-size 12px;
  line-height 13px;
  color: var(--cor-principal)
</style>
