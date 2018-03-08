
export interface GetUserDataOutputBoundary{
  onGetUserDataSuccess(responseData: GetUserDataOutputModel);
  onGetUserDataError(errorData: any);
}

export class GetUserDataOutputModel{
  public username: string;
  public levelCompleted: number;
  public levelName: string;
  public profileImage: string;
  public tags: Map<number, string>;
}
