import {Entity} from "./Entity";

export default class AuthToken extends Entity {
  private _token: string;
  private _isFirstLogin: boolean;


  constructor(token: string, isFirstLogin: boolean) {
    super();
    this._token = token;
    this._isFirstLogin = isFirstLogin;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get isFirstLogin(): boolean {
    return this._isFirstLogin;
  }

  set isFirstLogin(value: boolean) {
    this._isFirstLogin = value;
  }
}
