import {Injectable} from "@angular/core";
import RewardItem from "@app/ui/models/RewardItem";
import {ToolbarState} from "@app/components/toolbar/TollbarState";

@Injectable()
export default class ViewPostViewModel{

  postToolbarState = ToolbarState.ALL_ITEMS;

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

}


