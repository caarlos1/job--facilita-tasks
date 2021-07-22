import { TarefasCache } from "./ToDoListClasses";

export const mudarEstadoTarefa = (context, estado) =>
  context.commit("mudarEstadoTarefaMutation", estado);

export const atualizarTarefas = (context, tarefas) =>
  context.commit("atualizarTarefasMutation", tarefas);

export const limparTarefas = (context) => {
  context.commit("atualizarTarefasMutation", "[]");
  TarefasCache.limparTarefasCache();
};
