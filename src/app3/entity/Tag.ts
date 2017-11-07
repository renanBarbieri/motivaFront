import {Entity} from "./Entity";

export default class Tag extends Entity{
  private _nome: string;

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }
}
