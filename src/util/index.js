export function salvarTarefasCache(state) {
  const tarefas = JSON.stringify(state.tarefas);
  localStorage.setItem("listaTarefasUsuario", tarefas);
}
export function limparTarefasCache() {
  localStorage.setItem("listaTarefasUsuario", "");
}

export function buscarTarefasCache() {
  return localStorage.getItem("listaTarefasUsuario");
}
