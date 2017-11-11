
export interface GetTopicosInteresseOutputBoundary{
  getTopicosInsteresseSuccess(responseData: GetTopicosInteresseResponseData);
  getTopicosInsteresseError(errorData: any);
}

export class GetTopicosInteresseResponseData{
  public topicListData: Map<string, string[]>;
}
