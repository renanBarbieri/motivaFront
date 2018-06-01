export abstract class Entity {

  protected _id: string;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}
