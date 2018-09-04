import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import RewardItem from "@app/ui/models/RewardItem";
import {ScreenState} from "@app/ui/ScreenState";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import {FileLikeObject, FileUploader} from 'ng2-file-upload';
import {DomSanitizer} from '@angular/platform-browser';
import LoggedComponent from "@app/ui/logged/LoggedComponent";
import {map, startWith} from "rxjs/operators";
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from "@angular/material";
import PublishPostUseCase from "@app/useCases/publishPost/PublishPostUseCase";
import ManageTagUseCase from "@app/useCases/tag/ManageTagUseCase";
import PostEditViewModel from "@app/ui/postEdit/PostEditViewModel";
import PostEditPresenter from "@app/ui/postEdit/PostEditPresenter";
import PostEditController from "@app/ui/postEdit/PostEditController";
import {ActivatedRoute} from "@angular/router";
import {PostEditUIView} from "@app/ui/postEdit/PostEditUIView";
import PostUseCase from "@app/useCases/post/PostUseCase";

@Component({
  selector: 'app-post-edit',
  templateUrl: './PostEditView.html',
  styleUrls: ['./PostEditStyle.css'],
  providers: [
    {provide: PostEditController, useClass: PostEditController},
    {provide: PostEditPresenter, useClass: PostEditPresenter},
    {provide: PostEditViewModel, useClass: PostEditViewModel},
    {provide: UserDataUseCase, useClass: UserDataUseCase},
    {provide: AuthUseCase, useClass: AuthUseCase},
    {provide: PostUseCase, useClass: PostUseCase},
    {provide: PublishPostUseCase, useClass: PublishPostUseCase},
    {provide: ManageTagUseCase, useClass: ManageTagUseCase}
  ]
})
export class PostEditComponent extends LoggedComponent implements OnInit, PostEditUIView {

  @Output()
  screenStateChange = new EventEmitter<ScreenState>();

  @Output()
  authStateLogged = new EventEmitter<boolean>();

  @ViewChild('tagInput')
  tagInput: ElementRef;

  constructor(private postEditPresenter: PostEditPresenter, private postEditController: PostEditController,
              private postEditViewModel: PostEditViewModel, private sanitizer: DomSanitizer, private route: ActivatedRoute) {
    super(postEditController);

    this.configureTagsAutocomplete()
  }

  uploaderReady(imageUploader: FileUploader) {
    this.postEditViewModel.uploader = imageUploader;
    this.configureUploader();
  }

  configureUploader() {
    this.postEditViewModel.uploader.onAfterAddingFile = (fileItem) => {
      this.postEditViewModel.filePreviewPath = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
    };

    this.postEditViewModel.uploader.onWhenAddingFileFailed = (item: FileLikeObject, filter: any, options: any) => {
      switch (filter.name) {
        case 'mimeType':
          this.showErrorAlert(`Este tipo de arquivo não é permitido. Por favor, selecione um arquivo do tipo imagem, nos formatos png, jpg ou jpeg`);
          break;
        default:
          this.showErrorAlert(`Ocorreu um erro desconhecido. Pro favor, tente novamente.`);
      }
    }
  }

  configureTagsAutocomplete() {
    this.postEditViewModel.tagsFiltered = this.postEditViewModel.tagsFormCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this.filter(tag) : this.postEditViewModel.allTags.slice())
    );
  }

  ngOnInit() {
    this.screenStateChange.emit(ScreenState.LOADING);
    this.postEditPresenter.onViewInit(this);
    this.postEditController.verifyAuthorization(this.postEditPresenter);
    this.postEditController.getFileUploader(this.postEditPresenter);
    this.postEditController.getRegisteredTags(this.postEditPresenter);
    this.postEditController.getPostData(
      this.route.snapshot.params.postId,
      this.postEditPresenter
    );
  }


  onTagsListed(tags: Array<string>) {
    this.postEditViewModel.allTags.length = 0;
    tags.forEach(it => this.postEditViewModel.allTags.push(it));
  }

  /* ******************************************************** *
   * ****************** Dados do usuário ******************** *
   * ******************************************************** */

  /**
   *
   * @param {boolean} logged
   */
  updateLoggedStatus(logged: boolean) {
    this.screenStateChange.emit(ScreenState.LOADING);
    if (logged) {
      this.authStateLogged.emit(true);
      this.postEditController.getUserData(this.postEditPresenter);
    }
    else {
      this.authStateLogged.emit(false);
      this.postEditController.redirectToLogin();
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

    this.postEditViewModel.username = username;
    this.postEditViewModel.levelCompleted = levelCompleted;
    this.postEditViewModel.levelName = levelName;
    this.postEditViewModel.profileImage = profileImageUrl;
    this.updateRewardsList(rewards);
  }

  /**
   *
   * @param {Array<RewardItem>} newRewards
   */
  updateRewardsList(newRewards: Array<RewardItem>) {
    this.postEditViewModel.rewards.length = 0;
    newRewards.forEach((it) => {
      this.postEditViewModel.rewards.push(it);
    });
  }

  /* ************************************************ *
   * ******************* Dados do post ************** *
   * ************************************************ */

  updatePostData(title: string, estimateTime: string, tags: Array<string>, text: string, bannerImage: string) {
    this.postEditViewModel.title = title;
    this.postEditViewModel.tags = tags;
    this.postEditViewModel.filePreviewPath = bannerImage;
    this.postEditViewModel.editorContent = text;
    this.screenStateChange.emit(ScreenState.DONE);
  }


  /* ******************************************************** *
   * ******************* Editor do publishPost ************** *
   * ******************************************************** */

  /**
   * @reference https://quilljs.com/docs/quickstart/
   * @param quill
   */
  onEditorCreated(quill) {
    this.postEditViewModel.editor = quill;
  }

  /**
   *
   * @param {any} quill
   * @param {any} html
   * @param {any} text
   */
  onContentChanged({quill, html, text}) {
    this.postEditViewModel.editorContent = html;
  }

  /* ******************************************************** *
   * ***************** Uploader de arquivo ****************** *
   * ******************************************************** */

  /**
   *
   * @param e
   */
  fileOverBase(e: any): void {
    this.postEditViewModel.hasBaseDropZoneOver = e;
  }

  /* ******************************************************** *
   * ****************** Autocomplete tags ******************* *
   * ******************************************************** */

  /**
   * Método usado na view
   * @param {MatChipInputEvent} event
   */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tag
    if ((value || '').trim()) {
      this.postEditViewModel.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /**
   * Método usado na view
   * @param tag
   */
  remove(tag: any): void {
    const index = this.postEditViewModel.tags.indexOf(tag);

    if (index >= 0) {
      this.postEditViewModel.tags.splice(index, 1);
    }
  }

  /**
   *
   * @param {string} name
   * @returns {string[]}
   */
  filter(name: string) {
    return this.postEditViewModel.allTags.filter(tag =>
      tag.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  /**
   *
   * @param {MatAutocompleteSelectedEvent} event
   */
  selected(event: MatAutocompleteSelectedEvent): void {
    this.postEditViewModel.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
  }

  /**
   *
   * @param {any} target
   */
  onTitleChanged({target}) {
    console.log(target.value);
    this.postEditViewModel.title = target.value;
  }

  /**
   *
   */
  savePost() {
    this.screenStateChange.emit(ScreenState.LOADING);
    if (this.postEditViewModel.title && this.postEditViewModel.editorContent) {
      this.postEditController.publishImage(this.postEditPresenter);
    }
    else {
      this.showErrorAlert("Seu post deve conter imagem, título e texto");
    }
  }


  onImageUploadSuccess(imageUrl: string) {
    console.log(this.postEditViewModel.editorContent);
    this.postEditController.publishPost(
      this.postEditViewModel.title,
      this.postEditViewModel.tags,
      this.postEditViewModel.editorContent,
      imageUrl,
      this.postEditPresenter
    )
  }

  onUpdatePostSuccess() {
    this.screenStateChange.emit(ScreenState.DONE);
  }

  /**
   *
   */
  logout() {
    super.logout(this.postEditPresenter);
  }

  /**
   *
   * @param {String} message
   */
  showErrorAlert(message: String) {
    this.screenStateChange.emit(ScreenState.DONE);
    alert(message);
  }
}
