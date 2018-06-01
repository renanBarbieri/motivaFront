import {AuthOutputBoundary} from "@app/useCases/auth/AuthOutputBoundary";

export interface AuthInputBoundary {
  performLogin(input: AuthInputModel, outputBoundary: AuthOutputBoundary);

  performAuthValidation(outputBoundary: AuthOutputBoundary);

  performLogout(outputBoundary: AuthOutputBoundary);
}


export class AuthInputModel {
  public username: string;
  public password: string;
}
