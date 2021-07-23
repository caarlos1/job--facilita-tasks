export class buscarPor {
  static Geral = (t) => t.tipo.valor != 500;
  static Importantes = (t) =>
    t.tipo.valor == 2 && !t.concluida && t.tipo.valor != 500;
  static Urgentes = (t) =>
    t.tipo.valor == 3 && !t.concluida && t.tipo.valor != 500;
  static Pendentes = (t) => t.concluida == false && t.tipo.valor != 500;
  static Finalizadas = (t) => t.concluida == true && t.tipo.valor != 500;
  static Outras = (t) =>
    (t.tipo.valor == 1 || undefined) && !t.concluida && t.tipo.valor != 500;
  static Excluidas = (t) => t.tipo.valor === 500;
}

export class Tarefas {
  static filtrar = (s, bool) => s.tarefas.filter(bool);
  static contar = (s, bool) => s.tarefas.filter(bool).length;
  static buscar = (s, id) => s.tarefas.find((tarefa) => tarefa.id == id);

  static formatarParaSalvar = ({ getters }, tarefa) => {
    tarefa.id = getters.nuemeroTotalDeTarefas + 1;
    tarefa.concluida = false;
    return tarefa;
  };

  static mesclar = (a, b) => {
    a.titulo = b.titulo;
    a.descricao = b.descricao;
    a.concluida = b.concluida;
    a.tipo = b.tipo;
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
