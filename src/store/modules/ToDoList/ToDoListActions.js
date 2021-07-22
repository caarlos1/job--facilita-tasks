import { TarefasCache } from "./ToDoListClasses";
import { tarefas } from "./ToDoListDados";

export const mudarEstadoTarefa = (context, estado) =>
  context.commit("mudarEstadoTarefaMutation", estado);

export const atualizarTarefas = (context, tarefas) =>
  context.commit("atualizarTarefasMutation", tarefas);

export const limparTarefas = (context) => {
  context.commit("atualizarTarefasMutation", "[]");
  TarefasCache.limparTarefasCache();
};

export const popularTarefas = (context) => {
  context.commit("popularTarefasMutation", tarefas);
};
