import {Entity} from "./Entity";

export default class Nivel extends Entity {
  private _nome: string;
  private _descricao: string;
  private _experiencia: number;
  
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
  
  get experiencia(): number {
    return this._experiencia;
  }
  
  set experiencia(value: number) {
    this._experiencia = value;
  }
}
