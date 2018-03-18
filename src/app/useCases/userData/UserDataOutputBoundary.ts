
export interface UserDataOutputBoundary{
  onUserDataSuccess(responseData: UserDataOutputModel);
  onUserDataError(errorData: any);
}

export class UserDataOutputModel{
  public username: string;
  public levelCompleted: number;
  public levelName: string;
  public profileImage: string;
  public tags: Map<number, string>;
}
