import PostItem from "app/ui/models/PostItem";
import {Injectable} from "@angular/core";
import RewardItem from "@app/ui/models/RewardItem";

@Injectable()
export default class ViewPostsViewModel {
  username: string;
  levelCompleted: number;
  levelName: string;
  profileImage: string;
  rewards: Array<RewardItem> = [];
  postList: Array<PostItem> = [];
  title: string;
}
