export default class Recompensa {
    private _id: String;
    private _nome: String;
    private _imagem: String;


  get id(): String {
    return this._id;
  }

  set id(value: String) {
    this._id = value;
  }

  get nome(): String {
    return this._nome;
  }

  set nome(value: String) {
    this._nome = value;
  }

  get imagem(): String {
    return this._imagem;
  }

  set imagem(value: String) {
    this._imagem = value;
  }
}
