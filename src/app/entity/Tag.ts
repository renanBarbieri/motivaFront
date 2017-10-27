export default class Tag {
    private _id: String;
    private _nome: String;


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
}
