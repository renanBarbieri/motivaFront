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
  postImageUrl: string = "https://www.comunilog.com/sites/default/files/styles/noticias/public/field/image/matrizeisenower.png?itok=T4ua3ySO";
  title: string = "Mock título";
  tags: Array<string> = ['tag 1', 'tag 2', 'tag 3', 'tag 4'];
  postHtmlText: string = "Lorem fuck ipsum";

}


