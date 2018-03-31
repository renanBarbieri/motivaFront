export interface AuthGateway{
  setStorageKey(key: string): Promise<boolean>;
  getStorageKey(): Promise<string>;
  clearStorageKey(): Promise<boolean>;
}
