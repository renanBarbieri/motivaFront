import {Component, Directive, EventEmitter, OnInit, Output} from '@angular/core';
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import RewardItem from "@app/ui/models/RewardItem";
import {ScreenState} from "@app/ui/ScreenState";
import PostViewModel from "@app/ui/post/PostViewModel";
import PostController from "@app/ui/post/PostController";
import {PostUiView} from "@app/ui/post/PostUIView";
import PostPresenter from "@app/ui/post/PostPresenter";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import { FileUploader  } from 'ng2-file-upload';
import { DomSanitizer } from '@angular/platform-browser';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-post',
  templateUrl: './PostView.html',
  styleUrls: ['./PostStyle.css'],
  providers: [
    { provide: PostController, useClass: PostController },
    { provide: PostPresenter, useClass: PostPresenter },
    { provide: PostViewModel, useClass: PostViewModel },
    { provide: UserDataUseCase, useClass: UserDataUseCase },
    { provide: AuthUseCase, useClass: AuthUseCase }
  ]
})
export class PostComponent implements OnInit, PostUiView{

  @Output()
  screenStateChange = new EventEmitter<ScreenState>();

  @Output()
  authStateLogged = new EventEmitter<boolean>();

  editorOptions = {
    modules: {
      //theme: 'snow',
      formula: true,
      toolbar: [
        ['bold', 'italic', 'underline', 'strike', { 'color': [] }],
        ['blockquote', 'code-block', 'formula'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'align': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
      ],
    }
  };

  public uploader:FileUploader = new FileUploader({url: URL});


  constructor(
    private postPresenter: PostPresenter,
    private postController: PostController,
    private postViewModel: PostViewModel,
    private sanitizer: DomSanitizer){
    this.uploader.onAfterAddingFile = (fileItem) => {
      this.postViewModel.filePreviewPath  = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
    }
  }

  ngOnInit(){
    this.postPresenter.onViewInit(this);
    this.postController.verifyAuthorization(this.postPresenter);
  }

  updateLoggedStatus(logged: boolean) {
    this.screenStateChange.emit(ScreenState.LOADING);
    if(logged){
      this.authStateLogged.emit(true);
      this.postController.getUserData(this.postPresenter);
    }
    else {
      this.authStateLogged.emit(false);
    }
  }

  updateUserData(username: string, levelCompleted: number, levelName: string,
                 profileImageUrl: string, rewards: Array<RewardItem>, tags: Map<number, string>) {
    this.postViewModel.username = username;
    this.postViewModel.levelCompleted = levelCompleted;
    this.postViewModel.levelName = levelName;
    this.postViewModel.profileImage = profileImageUrl;
    this.updateRewardsList(rewards);
  }

  updateRewardsList(newRewards: Array<RewardItem>) {
    this.postViewModel.rewards.length = 0;
    newRewards.forEach((it) => {
      this.postViewModel.rewards.push(it);
    });
  }

  //https://quilljs.com/docs/quickstart/
  onEditorCreated(quill) {
    console.log("onEditorCreated");
    this.postViewModel.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log('quill content is changed!', quill, html, text);
    this.postViewModel.htmlText = html;
  }

  public fileOverBase(e:any):void {
    this.postViewModel.hasBaseDropZoneOver = e;
  }

  openProfile() {
    this.postController.goToProfile();
  }

  openFavorites() {
    this.postController.goToFavorites();
  }

  openSettings() {
    this.postController.goToSettings();
  }

  logout() {
    this.postController.makeLogout(this.postPresenter);
  }

  showErrorAlert(message: String) {
    alert(message);
  }
}
