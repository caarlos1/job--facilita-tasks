export default {
  namespaced: true,
  state: {
    ativa: false,
    titulo: "",
  },
  getters: {
    modalBoxEstaAtiva: (s) => s.ativa,
    obterTituloModalBox: (s) => s.titulo,
  },
  mutations: {
    ativarModalBox: (s) => {
      s.ativa = true;
    },
    desativarModalBox: (s) => {
      s.ativa = false;
    },
    definirTituloModalBox: (s, titulo) => {
      s.titulo = titulo;
    },
  },
};
