import {UIContract} from "app/useCases/UIContract";
import CardViewModel from "app/useCases/card/CardViewModel";

export interface HomeUiView extends UIContract{

  updateUserData(username: string, levelCompleted: number, levelName: string, profileImageUrl: string, tags: Map<number, string>);

  updateTopicList(topicList: Map<string, CardViewModel[]>);
}
