import AuthToken from "@app/entity/AuthToken";

export interface AuthGateway {
  setKey(key: string): Promise<boolean>;

  getKey(): Promise<string>;

  generateKey(username: string, password: string): Promise<AuthToken>;

  clearKey(): Promise<boolean>;

  changePassword(key: string, password: string): Promise<boolean>;
}
