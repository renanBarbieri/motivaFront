import {Injectable} from "@angular/core";
import RewardItem from "@app/ui/models/RewardItem";
import {ToolbarState} from "@app/components/toolbar/TollbarState";
import CommentItem from "@app/ui/models/CommentItem";

@Injectable()
export default class ViewPostViewModel {

  postToolbarState = ToolbarState.ALL_ITEMS;
  clearCommentBeforeUpdateList: boolean = false;

  /**
   * Left Bar
   */
  username: string;
  levelCompleted: number;
  levelName: string;
  profileImage: string;
  rewards: Array<RewardItem> = [];

  /**
   * Post
   */
  postImageUrl: string;
  title: string;
  tags: Array<string>;
  estimatedMinutes: string;
  postHtmlText: string;
  postOwner: string;

  /**
   * Comments
   */
  postComments: Array<CommentItem> = [];
  commentsIndexes: Array<number> = [];
  userComment: string;
}


