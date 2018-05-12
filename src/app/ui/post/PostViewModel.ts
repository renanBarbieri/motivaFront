import {Injectable} from "@angular/core";
import RewardItem from "@app/ui/models/RewardItem";
import {SafeUrl} from "@angular/platform-browser";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {ToolbarState} from "@app/components/toolbar/TollbarState";
import {FileUploader} from "ng2-file-upload";

@Injectable()
export default class PostViewModel{

  postToolbarState = ToolbarState.HIDE_QUERY_AND_CREATE;

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
  //quill editor
  editor;
  editorOptions = {
    modules: {
      formula: true,
      toolbar: [
        ['bold', 'italic', 'underline', 'strike', { 'color': [] }],
        ['blockquote', 'code-block', 'formula'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'align': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
      ]
    },
    placeholder: "Insira seu texto aqui",
  };
  postHtmlText: string;

  //dropzone and photo uploador
  hasBaseDropZoneOver = false;
  public filePreviewPath: SafeUrl;
  public allowedMimeType: string[] = ['image/png', 'image/jpg', 'image/jpeg'];
  public uploader:FileUploader = new FileUploader({
    url: 'http://138.68.249.148:8000/app/v1/upload/post_image',
    allowedMimeType: this.allowedMimeType
  });

  //chips autocomplete
  tags: Array<string> = [];
  tagsSelectable: boolean = true;
  tagsRemovable: boolean = true;
  tagsAddOnBlur: boolean = false;
  tagsSeparatorKeysCodes = [ENTER, COMMA];
  tagsFormCtrl = new FormControl();
  tagsFiltered: Observable<any[]>;
  allTags: Array<string> = [];

  //post title
  title: string;

}


