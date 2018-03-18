import PostItem from 'app/ui/models/PostItem';
import TopicItem from '@app/ui/models/TopicItem';
import UserItem from '@app/ui/models/UserItem';
import {UIContract} from "app/useCases/UIContract";

export interface SearchUiView extends UIContract{

  updateUserData(username: string, levelCompleted: number, levelName: string, profileImageUrl: string, tags: Map<number, string>);

  updateResultList(resultList:  [Array<UserItem>, Array<TopicItem>, Array<PostItem>]);
}
