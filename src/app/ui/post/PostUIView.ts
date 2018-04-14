import {default as PostItem} from "app/ui/models/PostItem";
import RewardItem from "app/ui/models/RewardItem";
import {AuthUiView} from "@app/ui/auth/AuthUIView";

export interface PostUiView extends AuthUiView{

  updateUserData(username: string, levelCompleted: number, levelName: string,
                 profileImageUrl: string, rewards: Array<RewardItem>, tags: Map<number, string>);

}
