import {Injectable} from "@angular/core";
import RewardItem from "@app/ui/models/RewardItem";
import {SafeUrl} from "@angular/platform-browser";

@Injectable()
export default class PostViewModel{
  username: string;
  levelCompleted: number;
  levelName: string;
  profileImage: string;
  rewards: Array<RewardItem> = [];
  editor;
  postHtmlText: string;
  title: string;
  hasBaseDropZoneOver = false;
  public filePreviewPath: SafeUrl;
}
