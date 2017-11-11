import {Entity} from "@app/entity/Entity";

export default class Article extends Entity{

  private _title: string;
  private _subtitle: string;
  private _content: string;
  private _publishDate: string;
  private _editedDate: number;
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

  get publishDate(): string {
    return this._publishDate;
  }

  set publishDate(value: string) {
    this._publishDate = value;
  }

  get editedDate(): number {
    return this._editedDate;
  }

  set editedDate(value: number) {
    this._editedDate = value;
  }

  get owner(): string {
    return this._owner;
  }

  set owner(value: string) {
    this._owner = value;
  }
}
