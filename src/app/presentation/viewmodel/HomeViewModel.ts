import CardViewModel from "@app/presentation/viewmodel/CardViewModel";
import {Injectable} from "@angular/core";

@Injectable()
export default class HomeViewModel{
  username: string;
  levelCompleted: number;
  levelName: string;
  topicsList: Map<string, CardViewModel[]> = new Map();
  topicsKeys: Array<string> = [];
}
