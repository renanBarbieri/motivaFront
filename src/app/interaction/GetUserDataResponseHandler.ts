
export interface GetUserDataResponseHandler{
  onGetUserDataSuccess(responseData: GetUserDataResponseData);
  onGetUserDataError(errorData: any);
}

export class GetUserDataResponseData{
  public username: string;
  public levelCompleted: number;
  public levelName: string;
  public profileImage: string;
  public tags: Map<number, string>;
}
