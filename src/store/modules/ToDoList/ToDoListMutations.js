import { Tarefas, TarefasCache } from "./ToDoListClasses";
import { Util } from "../../../util";

export const mudarEstadoTarefaMutation = (state, id) => {
  const tarefa = Tarefas.buscar(state, id);
  tarefa.finalizada = !tarefa.finalizada;
  TarefasCache.salvarTarefasCache(state);
};

export const atualizarTarefasMutation = (state, dados) => {
  state.tarefas = Util.toJSON(dados);
  TarefasCache.salvarTarefasCache(state);
};

export const popularTarefasMutation = (state, dados) => {
  state.tarefas = dados;
  TarefasCache.salvarTarefasCache(state);
};
