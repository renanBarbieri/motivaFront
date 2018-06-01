export interface AuthGateway {
  setKey(key: string): Promise<boolean>;

  getKey(): Promise<string>;

  generateKey(username: string, password: string): Promise<string>;

  clearKey(): Promise<boolean>;
}
