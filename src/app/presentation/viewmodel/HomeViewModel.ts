import CardViewModel from "@app/presentation/viewmodel/CardViewModel";

export default class HomeViewModel{
  username: string;
  levelCompleted: number;
  levelName: string;
  topicsList: Map<string, CardViewModel[]>
}
