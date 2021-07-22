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
      default:
        return objeto.listaDeTarefas;
    }
  };
}
