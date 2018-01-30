import {Entity} from "./Entity";

export default class Reward extends Entity{
  private _name: string;
  private _image: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }
}
