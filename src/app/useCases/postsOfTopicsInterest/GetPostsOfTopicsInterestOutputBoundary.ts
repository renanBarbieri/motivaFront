
export interface GetPostsOfTopicsInterestOutputBoundary{
  onGetPostsOfTopicsInterestSuccess(responseData: GetPostsOfTopicsInterestOutputModel);
  onGetPostsOfTopicsInterestError(errorData: any);
}

export class GetPostsOfTopicsInterestOutputModel{
  public tagPostsMap: Map<string, Array<string>>;
}
