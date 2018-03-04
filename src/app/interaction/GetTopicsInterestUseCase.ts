import {GetTopicsInterestResponseHandler} from "@app/interaction/GetTopicsInterestRespondeHandler";

export interface GetTopicsInterestUseCase{
  getTopics(requestData: GetTopicsInterestRequestData, presenter: GetTopicsInterestResponseHandler)
}

export class GetTopicsInterestRequestData {
  public tags: Map<number, string>;
}
