import {Entity} from "./Entity";

export default class Level extends Entity {
  private _name: string;
  private _description: string;
  private _experience: number;
  private _nextLevelName: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get experience(): number {
    return this._experience;
  }

  set experience(value: number) {
    this._experience = value;
  }


  get nextLevelName(): string {
    return this._nextLevelName;
  }

  set nextLevelName(value: string) {
    this._nextLevelName = value;
  }
}
