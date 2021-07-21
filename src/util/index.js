export class Util {
  static toJSON = (dados) => JSON.parse(dados);
  static isObjetoVazio = (obj) => Object.values(obj).length;
}
