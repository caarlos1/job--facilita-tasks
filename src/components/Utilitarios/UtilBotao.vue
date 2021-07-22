<template>
  <button :type="tipo" class="botao" :class="classesDinamicas">
    {{ botao || "Enviar" }}
  </button>
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
    tipo: String,
  },

  data() {
    return {
      classesDinamicas: {
        "botao--100": this.responsivo,
        "primaria--btn": true,
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
