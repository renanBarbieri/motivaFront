import Nivel from './Nivel';
import Recompensa from './Recompensa';
import Tag from './Tag';

export default class Usuario {
    private _id: String;
    private _nome: String;
    private _descricao: String;
    private _username: String;
    private _avatar: String;
    private _email: String;
    private _experiencia: Number;
    private _facebook: String;
    private _github: String;
    private _linkedin: String;
    private _nivel: Nivel;
    private _recompensas: Recompensa[];
    private _interesses: Tag[];


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

  get username(): String {
    return this._username;
  }

  set username(value: String) {
    this._username = value;
  }

  get avatar(): String {
    return this._avatar;
  }

  set avatar(value: String) {
    this._avatar = value;
  }

  get email(): String {
    return this._email;
  }

  set email(value: String) {
    this._email = value;
  }

  get experiencia(): Number {
    return this._experiencia;
  }

  set experiencia(value: Number) {
    this._experiencia = value;
  }

  get facebook(): String {
    return this._facebook;
  }

  set facebook(value: String) {
    this._facebook = value;
  }

  get github(): String {
    return this._github;
  }

  set github(value: String) {
    this._github = value;
  }

  get linkedin(): String {
    return this._linkedin;
  }

  set linkedin(value: String) {
    this._linkedin = value;
  }

  get nivel(): Nivel {
    return this._nivel;
  }

  set nivel(value: Nivel) {
    this._nivel = value;
  }

  get recompensas(): Recompensa[] {
    return this._recompensas;
  }

  set recompensas(value: Recompensa[]) {
    this._recompensas = value;
  }

  get interesses(): Tag[] {
    return this._interesses;
  }

  set interesses(value: Tag[]) {
    this._interesses = value;
  }
}
