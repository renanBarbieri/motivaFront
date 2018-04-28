import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import RewardItem from "@app/ui/models/RewardItem";
import {ScreenState} from "@app/ui/ScreenState";
import PostViewModel from "@app/ui/post/PostViewModel";
import PostController from "@app/ui/post/PostController";
import {PostUiView} from "@app/ui/post/PostUIView";
import PostPresenter from "@app/ui/post/PostPresenter";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import {FileItem, FileLikeObject, FileUploader, FilterFunction} from 'ng2-file-upload';
import { DomSanitizer } from '@angular/platform-browser';
import LoggedComponent from "@app/ui/logged/LoggedComponent";
import {ToolbarState} from "@app/components/toolbar/TollbarState";

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
export class PostComponent extends LoggedComponent implements OnInit, PostUiView{

  postToolbarState = ToolbarState.HIDE_QUERY_AND_CREATE;

  @Output()
  screenStateChange = new EventEmitter<ScreenState>();

  @Output()
  authStateLogged = new EventEmitter<boolean>();

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
      ],
    }
  };

  public allowedMimeType: string[] = ['image/png', 'image/jpg', 'image/jpeg'];

  public uploader:FileUploader = new FileUploader({
    url: URL,
    allowedMimeType: this.allowedMimeType
  });


  constructor( private postPresenter: PostPresenter, private postController: PostController,
               private postViewModel: PostViewModel, private sanitizer: DomSanitizer){
    super(postController);

    this.uploader.onAfterAddingFile = (fileItem) => {
      this.postViewModel.filePreviewPath  = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
    };

    this.uploader.onWhenAddingFileFailed = (item: FileLikeObject, filter: any, options: any) => {
      switch (filter.name) {
        case 'mimeType':
          this.showErrorAlert(`Este tipo de arquivo não é permitido. Por favor, selecione um arquivo do tipo imagem, nos formatos png, jpg ou jpeg`);
          break;
        default:
          this.showErrorAlert(`Ocorreu um erro desconhecido. Pro favor, tente novamente.`);
      }
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

  public savePost() {
    console.log(this.getLastFile());
    this.uploader.uploadItem(this.getLastFile());
  }

  public getLastFile(): FileItem {
    return this.uploader.queue[this.uploader.queue.length-1];
  }

  logout() {
    super.logout(this.postPresenter);
  }

  showErrorAlert(message: String) {
    alert(message);
  }
}
