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

export const popularTarefasMutation = (state, dados) => {
  state.tarefas = dados;
  TarefasCache.salvarTarefasCache(state);
};

export const atualizarTarefaMutation = (state, tarefaEditada) => {
  let tarefa = Tarefas.buscar(state, tarefaEditada.id);
  try {
    tarefa = Object.entries(tarefaEditada);
  } catch (err) {
    console.log(
      `Algo de errado aconteceu com essa tarefa: ${tarefa.titulo}. Erro: ${err}`
    );
  }
  TarefasCache.salvarTarefasCache(state);
};
