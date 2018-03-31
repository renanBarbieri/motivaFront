import {AuthOutputBoundary} from "@app/useCases/auth/AuthOutputBoundary";

export interface AuthInputBoundary{
  performAuthValidation(outputBoundary: AuthOutputBoundary);
  performLogout(outputBoundary: AuthOutputBoundary);
}
