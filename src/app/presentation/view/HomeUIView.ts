import {UIContract} from "@app/presentation/view/UIContract";
import CardViewModel from "@app/presentation/viewmodel/CardViewModel";

export interface HomeUiView extends UIContract{

  updateUserData(username: string, levelCompleted: number, levelName: string, profileImageUrl: string, tags: Map<number, string>);

  updateTopicList(topicList: Map<string, CardViewModel[]>);
}
