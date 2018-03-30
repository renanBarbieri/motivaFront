export interface AuthOutputBoundary{
  onAuthLogoutSuccess(responseData: AuthOutputModel);
  onAuthLogoutError(errorData: any);
}

export class AuthOutputModel{
  public code: number;
  public message: string;
}
