import Level from './Level';
import Reward from './Reward';
import Tag from './Tag';
import {Entity} from "./Entity";

export default class User extends Entity {
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

  private _username: string;

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  private _avatar: string;

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }

  private _email: string;

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  private _experience: number;

  get experience(): number {
    return this._experience;
  }

  set experience(value: number) {
    this._experience = value;
  }

  private _facebook: string;

  get facebook(): string {
    return this._facebook;
  }

  set facebook(value: string) {
    this._facebook = value;
  }

  private _github: string;

  get github(): string {
    return this._github;
  }

  set github(value: string) {
    this._github = value;
  }

  private _linkedin: string;

  get linkedin(): string {
    return this._linkedin;
  }

  set linkedin(value: string) {
    this._linkedin = value;
  }

  private _level: Level;

  get level(): Level {
    return this._level;
  }

  set level(value: Level) {
    this._level = value;
  }

  private _rewards: Reward[];

  get rewards(): Reward[] {
    return this._rewards;
  }

  set rewards(value: Reward[]) {
    this._rewards = value;
  }

  private _interests: Tag[];

  get interests(): Tag[] {
    return this._interests;
  }

  set interests(value: Tag[]) {
    this._interests = value;
  }
}
