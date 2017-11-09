import {Entity} from "./Entity";

export default class Recompensa extends Entity{
  private _nome: string;
  private _imagem: string;
  
  get nome(): string {
    return this._nome;
  }
  
  set nome(value: string) {
    this._nome = value;
  }
  
  get imagem(): string {
    return this._imagem;
  }
  
  set imagem(value: string) {
    this._imagem = value;
  }
}
