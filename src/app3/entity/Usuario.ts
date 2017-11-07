import Nivel from './Nivel';
import Recompensa from './Recompensa';
import Tag from './Tag';
import {Entity} from "./Entity";

export default class Usuario extends Entity{
  private _nome: string;
  private _descricao: string;
  private _username: string;
  private _avatar: string;
  private _email: string;
  private _experiencia: number;
  private _facebook: string;
  private _github: string;
  private _linkedin: string;
  private _nivel: Nivel;
  private _recompensas: Recompensa[];
  private _interesses: Tag[];

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get descricao(): string {
    return this._descricao;
  }

  set descricao(value: string) {
    this._descricao = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get experiencia(): number {
    return this._experiencia;
  }

  set experiencia(value: number) {
    this._experiencia = value;
  }

  get facebook(): string {
    return this._facebook;
  }

  set facebook(value: string) {
    this._facebook = value;
  }

  get github(): string {
    return this._github;
  }

  set github(value: string) {
    this._github = value;
  }

  get linkedin(): string {
    return this._linkedin;
  }

  set linkedin(value: string) {
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
