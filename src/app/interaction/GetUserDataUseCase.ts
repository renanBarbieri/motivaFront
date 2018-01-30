import {GetUserDataResponseHandler} from "./GetUserDataResponseHandler";

export interface GetUserDataUseCase{
  getUser(requestData: GetUserDataRequestData, presenter: GetUserDataResponseHandler)
}

export class GetUserDataRequestData {
  public userId: string;
}
