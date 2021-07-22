export class buscarPor {
  static Importantes = (t) => t.tipo.valor == 2 && !t.concluida;
  static Urgentes = (t) => t.tipo.valor == 3 && !t.concluida;
  static Pendentes = (t) => t.concluida == false;
  static Finalizadas = (t) => t.concluida == true;
  static Outras = (t) => (t.tipo.valor == 1 || undefined) && !t.concluida;
}

export class Tarefas {
  static filtrar = (s, bool) => s.tarefas.filter(bool);
  static contar = (s, bool) => s.tarefas.filter(bool).length;
  static buscar = (s, id) => s.tarefas.find((tarefa) => tarefa.id == id);

  static formatarParaSalvar = (context, tarefa) => {
    const { getters } = context;
    tarefa.id = getters.nuemeroTotalDeTarefas + 1;
    tarefa.concluida = false;
    return tarefa;
  };
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
