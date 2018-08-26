export interface AuthPasswordOutputBoundary {
  onAuthPasswordSuccess(responseData: AuthPasswordOutputModel);

  onAuthError(errorData: any);
}

export class AuthPasswordOutputModel {
  public code: number;
  public message: string;
}
