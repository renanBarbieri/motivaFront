import PostItem from 'app/ui/models/PostItem';
import TopicItem from 'app/ui/models/TopicItem';
import UserItem from 'app/ui/models/UserItem';
import {UIContract} from "app/useCases/UIContract";
import RewardItem from "app/ui/models/RewardItem";
import {AuthUiView} from "app/ui/auth/AuthUIView";

export interface SearchUiView extends AuthUiView{

  updateUserData(username: string, levelCompleted: number, levelName: string,
                 profileImageUrl: string, rewards: Array<RewardItem>, tags: Map<number, string>);

  updateResultList(resultList:  [Array<UserItem>, Array<TopicItem>, Array<PostItem>]);
}
