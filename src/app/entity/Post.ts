import {Entity} from "@app/entity/Entity";
import User from "@app/entity/User";
import Tag from "@app/entity/Tag";

export default class Post extends Entity {

  private _title: string;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  private _subtitle: string;

  get subtitle(): string {
    return this._subtitle;
  }

  set subtitle(value: string) {
    this._subtitle = value;
  }

  private _favorites: number;

  get favorites(): number {
    return this._favorites;
  }

  set favorites(value: number) {
    this._favorites = value;
  }

  private _likes: number;

  get likes(): number {
    return this._likes;
  }

  set likes(value: number) {
    this._likes = value;
  }

  private _content: string;

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  private _publishDate: Date;

  get publishDate(): Date {
    return this._publishDate;
  }

  set publishDate(value: Date) {
    this._publishDate = value;
  }

  private _editedDate: Date;

  get editedDate(): Date {
    return this._editedDate;
  }

  set editedDate(value: Date) {
    this._editedDate = value;
  }

  private _owner: User;

  get owner(): User {
    return this._owner;
  }

  set owner(value: User) {
    this._owner = value;
  }

  private _headerImage: string;

  get headerImage(): string {
    return this._headerImage;
  }

  set headerImage(value: string) {
    this._headerImage = value;
  }

  private _estimatedTime: number;

  get estimatedTime(): number {
    return this._estimatedTime;
  }

  set estimatedTime(value: number) {
    this._estimatedTime = value;
  }

  private _tags: Array<Tag>;

  get tags(): Tag[] {
    return this._tags;
  }

  set tags(value: Tag[]) {
    this._tags = value;
  }
}
