import { TarefasCache, Tarefas } from "./ToDoListClasses";
import { tarefas } from "./ToDoListDados";

export const mudarEstadoTarefa = (context, estado) =>
  context.commit("mudarEstadoTarefaMutation", estado);

export const atualizarTarefas = (context, tarefas) =>
  context.commit("atualizarTarefasMutation", tarefas);

export const limparTarefas = (context) => {
  context.commit("atualizarTarefasMutation", "[]");
  TarefasCache.limparTarefasCache();
};

export const adicionarTarefa = (context, tarefa) => {
  tarefa = Tarefas.formatarParaSalvar(context, tarefa);
  context.commit("adicionarTarefaMutation", tarefa);
};

export const popularTarefas = (context) => {
  context.commit("popularTarefasMutation", tarefas);
};
