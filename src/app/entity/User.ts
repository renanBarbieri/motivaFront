import Level from './Level';
import Reward from './Reward';
import Tag from './Tag';
import {Entity} from "./Entity";

export default class User extends Entity{
  private _name: string;
  private _description: string;
  private _username: string;
  private _avatar: string;
  private _email: string;
  private _experience: number;
  private _facebook: string;
  private _github: string;
  private _linkedin: string;
  private _level: Level;
  private _rewards: Reward[];
  private _interests: Tag[];

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

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get experience(): number {
    return this._experience;
  }

  set experience(value: number) {
    this._experience = value;
  }

  get facebook(): string {
    return this._facebook;
  }

  set facebook(value: string) {
    this._facebook = value;
  }

  get github(): string {
    return this._github;
  }

  set github(value: string) {
    this._github = value;
  }

  get linkedin(): string {
    return this._linkedin;
  }

  set linkedin(value: string) {
    this._linkedin = value;
  }

  get level(): Level {
    return this._level;
  }

  set level(value: Level) {
    this._level = value;
  }

  get rewards(): Reward[] {
    return this._rewards;
  }

  set rewards(value: Reward[]) {
    this._rewards = value;
  }

  get interests(): Tag[] {
    return this._interests;
  }

  set interests(value: Tag[]) {
    this._interests = value;
  }
}
