import {Injectable} from "@angular/core";
import RewardItem from "@app/ui/models/RewardItem";
import PostItem from "@app/ui/models/PostItem";

@Injectable()
export default class ProfileViewModel {
  username: string;
  levelCompleted: number;
  levelName: string;
  profileImage: string;
  rewards: Array<RewardItem> = [];
  topicsList: Map<string, PostItem[]> = new Map();
  topicsKeys: Array<string> = [];
}
