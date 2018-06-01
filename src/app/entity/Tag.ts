import {Entity} from "./Entity";

export default class Tag extends Entity {
  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
