import PostItem from "app/ui/models/PostItem";
import {Injectable} from "@angular/core";

@Injectable()
export default class HomeViewModel{
  username: string;
  levelCompleted: number;
  levelName: string;
  profileImage: string;
  topicsList: Map<string, PostItem[]> = new Map();
  topicsKeys: Array<string> = [];
}
