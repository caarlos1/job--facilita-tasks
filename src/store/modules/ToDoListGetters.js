import { buscarPor, Tarefas } from "./ToDoListClasses";

export const listaDeTarefas = (state) => state.tarefas;

export const listaDeTarefasImportantes = (state) =>
  Tarefas.filtrar(state, buscarPor.Importantes);

export const listaDeTarefasUrgentes = (state) =>
  Tarefas.filtrar(state, buscarPor.Urgentes);

export const listaDeTarefasOutras = (state) =>
  Tarefas.filtrar(state, buscarPor.Outras);

export const listaDeTarefasFinalizadas = (state) =>
  Tarefas.filtrar(state, buscarPor.Finalizadas);

export const listaDeTarefasPendentes = (state) =>
  Tarefas.filtrar(state, buscarPor.Pendentes);

export const numeroDeTarefasImportantes = (state) =>
  Tarefas.contar(state, buscarPor.Importantes);

export const numeroDeTarefasUrgentes = (state) =>
  Tarefas.contar(state, buscarPor.Urgentes);

export const numeroDeTarefasPendentes = (state) =>
  Tarefas.contar(state, buscarPor.Pendentes);
