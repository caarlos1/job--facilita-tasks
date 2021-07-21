import { salvarTarefasCache, limparTarefasCache } from "../../util";
export default {
  namespaced: true,
  state: {
    tarefas: [
      {
        id: 1,
        titulo: "Criar projeto Vue.js",
        descricao: "Fazer bem feito e bonito.",
        finalizada: false,
        importancia: {
          tipo: 1,
          texto: "Normal",
        },
      },
      {
        id: 2,
        titulo: "Começar a estudar Vue.js",
        descricao: "Fazer bem feito e bonito.",
        finalizada: false,
        importancia: {
          tipo: 2,
          texto: "Importante",
        },
      },
      {
        id: 3,
        titulo: "Criar projeto Vue.js",
        descricao: "Fazer bem feito e bonito.",
        finalizada: false,
        importancia: {
          tipo: 3,
          texto: "Urgente",
        },
      },
    ],
  },

  getters: {
    listaDeTarefas(state) {
      return state.tarefas;
    },

    listaDeTarefasFinalizadas(state) {
      return state.tarefas.filter((tarefa) => !tarefa.finalizada);
    },

    listaDeTarefasOutras(state) {
      return state.tarefas.filter(
        (tarefa) => tarefa.importancia.tipo == 1 && !tarefa.finalizada
      );
    },

    listarTarefasImportantes(state) {
      return state.tarefas.filter(
        (tarefa) => tarefa.importancia.tipo == 2 && !tarefa.finalizada
      );
    },

    listarTarefasUrgentes(state) {
      return state.tarefas.filter(
        (tarefa) => tarefa.importancia.tipo == 3 && !tarefa.finalizada
      );
    },
  },

  mutations: {
    mudarEstadoTarefaMutation(state, id) {
      const tarefa = state.tarefas.find((tarefa) => tarefa.id == id);
      tarefa.finalizada = !tarefa.finalizada;
      salvarTarefasCache(state);
    },

    atualizarTarefasMutation(state, dados) {
      state.tarefas = JSON.parse(dados);
      salvarTarefasCache(state);
    },
  },

  actions: {
    mudarEstadoTarefa(context, estado) {
      context.commit("mudarEstadoTarefaMutation", estado);
    },

    atualizarTarefas(context, tarefas) {
      context.commit("atualizarTarefasMutation", tarefas);
    },

    limparTarefas(context) {
      context.commit("atualizarTarefasMutation", "[]");
      limparTarefasCache();
    },
  },
};
