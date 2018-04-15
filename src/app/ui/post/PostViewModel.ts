import PostItem from "app/ui/models/PostItem";
import {Injectable} from "@angular/core";
import RewardItem from "@app/ui/models/RewardItem";
import AuthViewModel from "@app/ui/auth/AuthViewModel";
import {SafeUrl} from "@angular/platform-browser";

@Injectable()
export default class PostViewModel{
  username: string;
  levelCompleted: number;
  levelName: string;
  profileImage: string;
  rewards: Array<RewardItem> = [];
  editor;
  htmlText;
  hasBaseDropZoneOver = false;
  public filePreviewPath: SafeUrl;
}
