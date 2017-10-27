import NivelDataModel from "./NivelDataModel";

export default class UsuarioDataModel {
  private _id: String;
  private _username: String;
  private _foto: String;
  private _nivel: NivelDataModel;

  get id(): String {
    return this._id;
  }

  set id(value: String) {
    this._id = value;
  }

  get username(): String {
    return this._username;
  }

  set username(value: String) {
    this._username = value;
  }

  get foto(): String {
    return this._foto;
  }

  set foto(value: String) {
    this._foto = value;
  }

  get nivel(): NivelDataModel {
    return this._nivel;
  }

  set nivel(value: NivelDataModel) {
    this._nivel = value;
  }
}
