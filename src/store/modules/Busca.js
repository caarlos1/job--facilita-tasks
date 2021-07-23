export default {
  namespaced: true,
  state: {
    busca: "",
  },
  getters: {
    obterValorDeBusca: (s) => s.busca,
  },
  mutations: {
    atualizarBusca: (s, busca) => {
      s.busca = busca;
    },
  },
};
