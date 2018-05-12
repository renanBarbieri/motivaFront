import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import RewardItem from "@app/ui/models/RewardItem";
import {ScreenState} from "@app/ui/ScreenState";
import PostViewModel from "@app/ui/post/PostViewModel";
import PostController from "@app/ui/post/PostController";
import {PostUiView} from "@app/ui/post/PostUIView";
import PostPresenter from "@app/ui/post/PostPresenter";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import {FileItem, FileLikeObject} from 'ng2-file-upload';
import {DomSanitizer} from '@angular/platform-browser';
import LoggedComponent from "@app/ui/logged/LoggedComponent";
import {map, startWith} from "rxjs/operators";
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from "@angular/material";

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

  @Output()
  screenStateChange = new EventEmitter<ScreenState>();

  @Output()
  authStateLogged = new EventEmitter<boolean>();

  @ViewChild('tagInput')
  tagInput: ElementRef;

  constructor( private postPresenter: PostPresenter, private postController: PostController,
               private postViewModel: PostViewModel, private sanitizer: DomSanitizer){
    super(postController);

    this.configureUploader();
    this.configureTagsAutocomplete()
  }

  configureUploader(){
    this.postViewModel.uploader.onAfterAddingFile = (fileItem) => {
      this.postViewModel.filePreviewPath  = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
    };

    this.postViewModel.uploader.onWhenAddingFileFailed = (item: FileLikeObject, filter: any, options: any) => {
      switch (filter.name) {
        case 'mimeType':
          this.showErrorAlert(`Este tipo de arquivo não é permitido. Por favor, selecione um arquivo do tipo imagem, nos formatos png, jpg ou jpeg`);
          break;
        default:
          this.showErrorAlert(`Ocorreu um erro desconhecido. Pro favor, tente novamente.`);
      }
    }
  }

  configureTagsAutocomplete(){
    this.postViewModel.tagsFiltered = this.postViewModel.tagsFormCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this.filter(tag) : this.postViewModel.allTags.slice())
    );
  }

  ngOnInit(){
    this.postPresenter.onViewInit(this);
    this.postController.verifyAuthorization(this.postPresenter);
  }

  /**********************************************************
   ******************* Dados do usuário *********************
   **********************************************************/

  /**
   *
   * @param {boolean} logged
   */
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

  /**
   *
   * @param {string} username
   * @param {number} levelCompleted
   * @param {string} levelName
   * @param {string} profileImageUrl
   * @param {Array<RewardItem>} rewards
   * @param {Map<number, string>} tags
   */
  updateUserData(username: string, levelCompleted: number, levelName: string,
                 profileImageUrl: string, rewards: Array<RewardItem>, tags: Map<number, string>) {

    this.postViewModel.username = username;
    this.postViewModel.levelCompleted = levelCompleted;
    this.postViewModel.levelName = levelName;
    this.postViewModel.profileImage = profileImageUrl;
    this.updateRewardsList(rewards);
  }

  /**
   *
   * @param {Array<RewardItem>} newRewards
   */
  updateRewardsList(newRewards: Array<RewardItem>) {
    this.postViewModel.rewards.length = 0;
    newRewards.forEach((it) => {
      this.postViewModel.rewards.push(it);
    });
  }

  /**********************************************************
   ******************** Editor do post **********************
   **********************************************************/

  /**
   * @reference https://quilljs.com/docs/quickstart/
   * @param quill
   */
  onEditorCreated(quill) {
    this.postViewModel.editor = quill;
  }

  /**
   *
   * @param {any} quill
   * @param {any} html
   * @param {any} text
   */
  onContentChanged({ quill, html, text }) {
    this.postViewModel.postHtmlText = html;
  }

  /**********************************************************
   ****************** Uploader de arquivo *******************
   **********************************************************/

  /**
   *
   * @param e
   */
  fileOverBase(e:any):void {
    this.postViewModel.hasBaseDropZoneOver = e;
  }

  /**
   *
   * @returns {FileItem}
   */
  getLastFile(): FileItem {
    if(this.postViewModel.uploader.queue.length < 1) return null;
    return this.postViewModel.uploader.queue[this.postViewModel.uploader.queue.length-1];
  }

  /**********************************************************
   ******************* Autocomplete tags ********************
   **********************************************************/

  /**
   *
   * @param {MatChipInputEvent} event
   */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tag
    if ((value || '').trim()) {
      this.postViewModel.tags.push( value.trim() );
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /**
   *
   * @param tag
   */
  remove(tag: any): void {
    const index = this.postViewModel.tags.indexOf(tag);

    if (index >= 0) {
      this.postViewModel.tags.splice(index, 1);
    }
  }

  /**
   *
   * @param {string} name
   * @returns {string[]}
   */
  filter(name: string) {
    return this.postViewModel.allTags.filter(tag =>
      tag.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  /**
   *
   * @param {MatAutocompleteSelectedEvent} event
   */
  selected(event: MatAutocompleteSelectedEvent): void {
    this.postViewModel.tags.push( event.option.viewValue );
    this.tagInput.nativeElement.value = '';
  }

  /**
   *
   * @param {any} target
   */
  onTitleChanged({target}) {
    console.log(target.value);
    this.postViewModel.title = target.value;
  }

  /**
   *
   */
  savePost() {
    if(this.postViewModel.title && this.postViewModel.postHtmlText && this.getLastFile()){
      console.log(this.getLastFile());
      this.postViewModel.uploader.uploadItem(this.getLastFile());
    }
    else {
      this.showErrorAlert("Seu post deve conter imagem, título e texto");
    }
  }

  /**
   *
   */
  logout() {
    super.logout(this.postPresenter);
  }

  /**
   *
   * @param {String} message
   */
  showErrorAlert(message: String) {
    alert(message);
  }
}
