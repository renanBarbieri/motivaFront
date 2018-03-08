import {GetUserDataOutputBoundary} from "./GetUserDataOutputBoundary";

export interface GetUserDataInputBoundary{
  getUser(requestData: GetUserDataInputModel, presenter: GetUserDataOutputBoundary)
}

export class GetUserDataInputModel {
  public userId: string;
}
