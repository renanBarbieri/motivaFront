import {UserDataOutputBoundary} from "./UserDataOutputBoundary";
import {AuthOutputBoundary} from "@app/useCases/userData/AuthOutputBoundary";

export interface UserDataInputBoundary{
  getUser(requestData: UserDataInputModel, presenter: UserDataOutputBoundary);
  performLogout(outputBoundary: AuthOutputBoundary);
}

export class UserDataInputModel {
  public username?: string;
  public password?: string;
}
