import {Entity} from "./Entity";

export default class Level extends Entity {
  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  private _description: string;

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  private _experience: number;

  get experience(): number {
    return this._experience;
  }

  set experience(value: number) {
    this._experience = value;
  }

  private _nextLevelName: string;

  get nextLevelName(): string {
    return this._nextLevelName;
  }

  set nextLevelName(value: string) {
    this._nextLevelName = value;
  }
}
