import User from "@app/entity/User";
import {Entity} from "@app/entity/Entity";

export default class Comment extends Entity{
  private _author: User;
  private _publish: Date;
  private _text: string;

  get author(): User {
    return this._author;
  }

  set author(value: User) {
    this._author = value;
  }

  get publish(): Date {
    return this._publish;
  }

  set publish(value: Date) {
    this._publish = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }
}
