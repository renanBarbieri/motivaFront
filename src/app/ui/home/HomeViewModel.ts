import PostItem from "app/ui/models/PostItem";
import {Injectable} from "@angular/core";
import RewardItem from "@app/ui/models/RewardItem";
import AuthViewModel from "@app/ui/auth/AuthViewModel";

@Injectable()
export default class HomeViewModel{
  username: string;
  levelCompleted: number;
  levelName: string;
  profileImage: string;
  rewards: Array<RewardItem> = [];
  topicsList: Map<string, PostItem[]> = new Map();
  topicsKeys: Array<string> = [];
}
