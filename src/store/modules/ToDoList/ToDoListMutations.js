import { Tarefas, TarefasCache } from "./ToDoListClasses";
import { Util } from "../../../util";

export const mudarEstadoTarefaMutation = (state, id) => {
  const tarefa = Tarefas.buscar(state, id);
  tarefa.concluida = !tarefa.concluida;
  TarefasCache.salvarTarefasCache(state);
};

export const atualizarTarefasMutation = (state, dados) => {
  state.tarefas = Util.toJSON(dados);
  TarefasCache.salvarTarefasCache(state);
};

export const adicionarTarefaMutation = (state, tarefa) => {
  state.tarefas.push(tarefa);
  TarefasCache.salvarTarefasCache(state);
};

export const excluirTarefaMutation = (state, id) => {
  const tarefa = Tarefas.buscar(state, id);
  // Nada é excluido, apenas é defino um tipo diferente.
  tarefa.tipo = { tag: "Excluida", valor: 500 };
  TarefasCache.salvarTarefasCache(state);
};

export const recuperarTarefaMutation = (state, id) => {
  const tarefa = Tarefas.buscar(state, id);
  tarefa.tipo = { tag: "Normal", valor: 1 };
  TarefasCache.salvarTarefasCache(state);
};

export const popularTarefasMutation = (state, dados) => {
  state.tarefas = dados;
  TarefasCache.salvarTarefasCache(state);
};

export const atualizarTarefaMutation = (state, tarefaEditada) => {
  let tarefa = Tarefas.buscar(state, tarefaEditada.id);
  Tarefas.mesclar(tarefa, tarefaEditada);
  TarefasCache.salvarTarefasCache(state);
};
