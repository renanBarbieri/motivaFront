export interface AuthOutputBoundary {
  onAuthSuccess(responseData: AuthOutputModel);

  onAuthError(errorData: any);
}

export class AuthOutputModel {
  public code: number;
  public message: string;
  public logged: boolean;
  public firstLogin: boolean;
}
