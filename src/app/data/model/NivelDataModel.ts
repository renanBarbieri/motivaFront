
export default class NivelDataModel {
  private _id: String;
  private _nome: String;
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

  get experiencia(): Number {
    return this._experiencia;
  }

  set experiencia(value: Number) {
    this._experiencia = value;
  }
}
