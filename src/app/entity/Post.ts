import {Entity} from "@app/entity/Entity";

export default class Post extends Entity{

  private _title: string;
  private _subtitle: string;
  private _content: string;
  private _publishDate: Date;
  private _editedDate: Date;
  private _owner: string;


  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get subtitle(): string {
    return this._subtitle;
  }

  set subtitle(value: string) {
    this._subtitle = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get publishDate(): Date {
    return this._publishDate;
  }

  set publishDate(value: Date) {
    this._publishDate = value;
  }

  get editedDate(): Date {
    return this._editedDate;
  }

  set editedDate(value: Date) {
    this._editedDate = value;
  }

  get owner(): string {
    return this._owner;
  }

  set owner(value: string) {
    this._owner = value;
  }
}
