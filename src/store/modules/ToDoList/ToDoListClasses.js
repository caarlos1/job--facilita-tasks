export class buscarPor {
  static Importantes = (t) => t.importancia.tipo == 2 && !t.finalizada;
  static Urgentes = (t) => t.importancia.tipo == 3 && !t.finalizada;
  static Pendentes = (t) => t.finalizada == false;
  static Finalizadas = (t) => t.finalizada == true;
  static Outras = (t) =>
    (t.importancia.tipo == 1 || undefined) && !t.finalizada;
}

export class Tarefas {
  static filtrar = (s, bool) => s.tarefas.filter(bool);
  static contar = (s, bool) => s.tarefas.filter(bool).length;
  static buscar = (s, id) => s.tarefas.find((tarefa) => tarefa.id == id);
}

export class TarefasCache {
  static salvarTarefasCache = (state) => {
    const tarefas = JSON.stringify(state.tarefas);
    localStorage.setItem("listaTarefasUsuario", tarefas);
  };

  static limparTarefasCache = () => {
    localStorage.setItem("listaTarefasUsuario", "");
  };

  static buscarTarefasCache = () => localStorage.getItem("listaTarefasUsuario");
}
