export default {
  namespaced: true,
  state: {
    ativa: false,
    titulo: "",
    componente: "",
    sub: "",
    id: null,
  },
  getters: {
    modalBoxEstaAtiva: (s) => s.ativa,
    obterTituloModalBox: (s) => s.titulo,
    obterSubTituloModalBox: (s) => s.sub,
    obterIdModalBox: (s) => s.id,
    obterComponenteModalAtivo: (s) => s.componente,
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

    definirComponenteModal: (s, componente) => {
      s.componente = componente;
    },

    definirSubTituloModal: (s, sub) => {
      s.sub = sub;
    },
  },
};
