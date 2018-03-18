import {UserDataOutputBoundary} from "./UserDataOutputBoundary";

export interface UserDataInputBoundary{
  getUser(requestData: UserDataInputModel, presenter: UserDataOutputBoundary)
}

export class UserDataInputModel {
  public userId: string;
}
