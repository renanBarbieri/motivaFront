import CardViewModel from "app/useCases/card/CardViewModel";
import {Injectable} from "@angular/core";

@Injectable()
export default class HomeViewModel{
  username: string;
  levelCompleted: number;
  levelName: string;
  profileImage: string;
  topicsList: Map<string, CardViewModel[]> = new Map();
  topicsKeys: Array<string> = [];
}
