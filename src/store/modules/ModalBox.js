export default {
  namespaced: true,
  state: {
    ativa: false,
    titulo: "",
    id: null,
  },
  getters: {
    modalBoxEstaAtiva: (s) => s.ativa,
    obterTituloModalBox: (s) => s.titulo,
    obterIdModalBox: (s) => s.id,
  },
  mutations: {
    ativarModalBox: (s, id) => {
      if (id) s.id = id;
      else s.id = null;
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
