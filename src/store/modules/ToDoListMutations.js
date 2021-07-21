import { Util } from "../../util";
import { Tarefas, TarefasCache } from "./ToDoListClasses";

export const mudarEstadoTarefaMutation = (state, id) => {
  const tarefa = Tarefas.buscar(state, id);
  tarefa.finalizada = !tarefa.finalizada;
  TarefasCache.salvarTarefasCache(state);
};

export const atualizarTarefasMutation = (state, dados) => {
  state.tarefas = Util.toJSON(dados);
  TarefasCache.salvarTarefasCache(state);
};
