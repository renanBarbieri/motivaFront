import RewardItem from "app/ui/models/RewardItem";
import {AuthUiView} from "@app/ui/auth/AuthUIView";
import {FileUploader} from "ng2-file-upload";

export interface PostUiView extends AuthUiView{

  uploaderReady(imageUploader: FileUploader);

  updateUserData(username: string, levelCompleted: number, levelName: string,
                 profileImageUrl: string, rewards: Array<RewardItem>, tags: Map<number, string>);

  onImageUploadSuccess(imageUrl: string);

}
