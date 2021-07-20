<template>
  <div class="menu-secundario">
    <div class="menu-secundario__bloco">
      <painel-menu-lista :listaDeLinks="links" tituloLinks="Categorias" />
    </div>
  </div>
</template>

<script>
import PainelMenuLista from "./PainelMenuLista.vue";
export default {
  components: { PainelMenuLista },

  data() {
    return {
      links: [
        {
          texto: "Todas",
          url: "#",
          ativo: true,
        },
        {
          texto: "Urgentes",
          url: "#",
          quantidade: 1,
          cor: "perigo",
        },
        {
          texto: "Importantes",
          url: "#",
          quantidade: 2,
          cor: "alerta",
        },
        {
          texto: "Outras",
          url: "#",
        },
        {
          texto: "Finalizados",
          url: "#",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.menu-secundario
  display grid
  background var(--cor-menu-secundario)
  box-shadow var(--sombra-padrao)

.menu-secundario__bloco
  align-self center
</style>
