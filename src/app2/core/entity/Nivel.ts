export default class Nivel {
    private _id: String;
    private _nome: String;
    private _descricao: String;
    private _experiencia: Number;


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

  get descricao(): String {
    return this._descricao;
  }

  set descricao(value: String) {
    this._descricao = value;
  }

  get experiencia(): Number {
    return this._experiencia;
  }

  set experiencia(value: Number) {
    this._experiencia = value;
  }
}
