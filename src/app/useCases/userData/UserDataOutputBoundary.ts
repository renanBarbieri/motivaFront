import RewardItem from "@app/ui/models/RewardItem";

export interface UserDataOutputBoundary{
  onUserDataSuccess(responseData: UserDataOutputModel);
  onUserDataError(errorData: any);
}

export class UserDataOutputModel{
  public username: string;
  public levelCompleted: number;
  public levelName: string;
  public profileImage: string;
  public rewards: Array<RewardItem>;
  public tags: Map<number, string>;
}
