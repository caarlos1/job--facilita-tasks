export class Util {
  static toJSON = (dados) => JSON.parse(dados);
  static isObjetoVazio = (obj) => Object.values(obj).length;
}

export class UtilTarefas {
  static definirClassPorValor = (valor) => {
    switch (valor) {
      case 2:
        return "alerta";
      case 3:
        return "perigo";
      case 500:
        return "excluida";
      default:
        return "primaria";
    }
  };

  static definirTagPorValor = (valor) => {
    switch (valor) {
      case 2:
        return "Importante";
      case 3:
        return "Urgente";
      case 500:
        return "Excluida";
      default:
        return "Normal";
    }
  };

  static definirListaPorTipo = (tipo, objeto) => {
    switch (tipo) {
      case "urgentes":
        return objeto.listaDeTarefasUrgentes;
      case "importantes":
        return objeto.listaDeTarefasImportantes;
      case "outras":
        return objeto.listaDeTarefasOutras;
      case "finalizadas":
        return objeto.listaDeTarefasFinalizadas;
      case "pendentes":
        return objeto.listaDeTarefasPendentes;
      case "excluidas":
        return objeto.listaDeTarefasExcluidas;
      default:
        return objeto.listaDeTarefas;
    }
  };
}
