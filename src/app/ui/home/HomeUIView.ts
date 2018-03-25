import {UIContract} from "app/useCases/UIContract";
import CardViewModel, {default as PostItem} from "app/ui/models/PostItem";
import RewardItem from "app/ui/models/RewardItem";

export interface HomeUiView extends UIContract{

  updateUserData(username: string, levelCompleted: number, levelName: string,
                 profileImageUrl: string, rewards: Array<RewardItem>, tags: Map<number, string>);

  updateTopicList(topicList: Map<string, PostItem[]>);
}
