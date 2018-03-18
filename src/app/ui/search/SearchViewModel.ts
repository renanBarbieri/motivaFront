import PostItem from "app/ui/models/PostItem";
import {Injectable} from "@angular/core";
import UserItem from "@app/ui/models/UserItem";
import TopicItem from "@app/ui/models/TopicItem";
import RewardItem from "@app/ui/models/RewardItem";

@Injectable()
export default class SearchViewModel{
  username: string;
  levelCompleted: number;
  levelName: string;
  profileImage: string;
  rewards: Array<RewardItem>;
  userResultList: Array<UserItem>;
  topicResultList: Array<TopicItem>;
  postResultList: Array<PostItem>;
}
