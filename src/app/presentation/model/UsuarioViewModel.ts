import NivelViewModel from './NivelViewModel';

export default class UsuarioViewModel {
  private _id: String;
  private _username: String;
  private _foto: String;
  private _nivel: NivelViewModel;


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

  get nivel(): NivelViewModel {
    return this._nivel;
  }

  set nivel(value: NivelViewModel) {
    this._nivel = value;
  }
}
