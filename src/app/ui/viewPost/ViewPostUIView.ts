import RewardItem from "app/ui/models/RewardItem";
import {AuthUiView} from "@app/ui/auth/AuthUIView";
import CommentItem from "@app/ui/models/CommentItem";

export interface ViewPostUiView extends AuthUiView {

  updateUserData(username: string, levelCompleted: number, levelName: string,
                 profileImageUrl: string, rewards: Array<RewardItem>, tags: Map<number, string>);

  updatePostData(title: string, estimateTime: string, tags: Array<string>, text: string, bannerImage: string);

  updateCommentList(comments: Array<CommentItem>);

  updateCommentListAfterAddComment();

}
