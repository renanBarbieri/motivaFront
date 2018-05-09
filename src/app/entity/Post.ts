import {Entity} from "@app/entity/Entity";
import User from "@app/entity/User";

export default class Post extends Entity{

  private _title: string;
  private _subtitle: string;
  private _favorites: number;
  private _likes: number;
  private _content: string;
  private _publishDate: Date;
  private _editedDate: Date;
  private _owner: User;
  private _headerImage: string;


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

  get owner(): User {
    return this._owner;
  }

  set owner(value: User) {
    this._owner = value;
  }


  get headerImage(): string {
    return this._headerImage;
  }

  set headerImage(value: string) {
    this._headerImage = value;
  }


  get favorites(): number {
    return this._favorites;
  }

  set favorites(value: number) {
    this._favorites = value;
  }

  get likes(): number {
    return this._likes;
  }

  set likes(value: number) {
    this._likes = value;
  }
}
