
export abstract class Entity{
  
  protected _id: String;
  
  get id(): String {
    return this._id;
  }
  
  set id(value: String) {
    this._id = value;
  }
}
