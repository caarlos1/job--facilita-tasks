import * as getters from "./ToDoListGetters";
import * as actions from "./ToDoListActions";
import * as mutations from "./ToDoListMutations";

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
  getters,
  mutations,
  actions,
};
