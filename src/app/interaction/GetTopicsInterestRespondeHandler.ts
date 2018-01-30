
export interface GetTopicsInterestResponseHandler{
  onGetTopicsOfInterestSuccess(responseData: GetTopicsInterestResponseData);
  onGetTopicsOfInterestError(errorData: any);
}

export class GetTopicsInterestResponseData{
  public topicListData: Map<string, string[]>;
}
