export const definirTagPorTipo = (tipo) => {
  switch (tipo) {
    case 2:
      return "alerta";
    case 3:
      return "perigo";
    default:
      return "primaria";
  }
};

export const definirListaPorTipo = (tipo, comp) => {
  switch (tipo) {
    case "urgentes":
      return comp.listaDeTarefasUrgentes;
    case "importantes":
      return comp.listaDeTarefasImportantes;
    case "outras":
      return comp.listaDeTarefasOutras;
    case "finalizadas":
      return comp.listaDeTarefasFinalizadas;
    default:
      return comp.listaDeTarefas;
  }
};
