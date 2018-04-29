import {Injectable} from "@angular/core";
import RewardItem from "@app/ui/models/RewardItem";
import PostItem from "@app/ui/models/PostItem";

@Injectable()
export default class ProfileViewModel {
  selfUsername: string;
  selfLevelCompleted: number;
  selfLevelName: string;
  selfProfileImage: string;
  selfRewards: Array<RewardItem> = [];
  userName: string;
  userLevelName: string;
  userProfileImage: string;
  userRewards: Array<RewardItem> = [];
  userRewardsIndexes: Array<number> = [];
  userTopicsKeys: Array<string> = [];
  topicsKeys: Array<string> = [];
  topicsList: Map<string, PostItem[]> = new Map();
}
