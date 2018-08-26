import {AuthOutputBoundary} from "@app/useCases/auth/AuthOutputBoundary";
import {AuthPasswordOutputBoundary} from "@app/useCases/auth/AuthPasswordOutputBoundary";

export interface AuthInputBoundary {
  performLogin(input: AuthInputModel, outputBoundary: AuthOutputBoundary);

  performAuthValidation(outputBoundary: AuthOutputBoundary);

  performLogout(outputBoundary: AuthOutputBoundary);

  performChangePassword(input: AuthInputModel, outputBoundary: AuthPasswordOutputBoundary);
}


export class AuthInputModel {
  public username: string;
  public password: string;
}
