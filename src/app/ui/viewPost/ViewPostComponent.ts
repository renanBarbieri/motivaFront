import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import RewardItem from "@app/ui/models/RewardItem";
import {ScreenState} from "@app/ui/ScreenState";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import LoggedComponent from "@app/ui/logged/LoggedComponent";
import ViewPostController from "@app/ui/viewPost/ViewPostController";
import ViewPostPresenter from "@app/ui/viewPost/ViewPostPresenter";
import ViewPostViewModel from "@app/ui/viewPost/ViewPostViewModel";
import {ViewPostUiView} from "@app/ui/viewPost/ViewPostUIView";
import {ActivatedRoute} from "@angular/router";
import PostUseCase from "@app/useCases/post/PostUseCase";

@Component({
  selector: 'app-post',
  templateUrl: './ViewPostView.html',
  styleUrls: ['./ViewPostStyle.css'],
  providers: [
    { provide: ViewPostController, useClass: ViewPostController },
    { provide: ViewPostPresenter, useClass: ViewPostPresenter },
    { provide: ViewPostViewModel, useClass: ViewPostViewModel },
    { provide: UserDataUseCase, useClass: UserDataUseCase },
    { provide: AuthUseCase, useClass: AuthUseCase },
    { provide: PostUseCase, useClass: PostUseCase },
  ]
})
export class ViewPostComponent extends LoggedComponent implements OnInit, ViewPostUiView{

  @Output()
  screenStateChange = new EventEmitter<ScreenState>();

  @Output()
  authStateLogged = new EventEmitter<boolean>();

  constructor( private viewPostPresenter: ViewPostPresenter,
               private viewPostController: ViewPostController,
               private viewPostViewModel: ViewPostViewModel,
               private route: ActivatedRoute){
    super(viewPostController);
  }

  ngOnInit(){
    this.viewPostPresenter.onViewInit(this);
    this.viewPostController.verifyAuthorization(this.viewPostPresenter);
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
      this.viewPostController.getUserData(this.viewPostPresenter);
      this.viewPostController.getPostData(
        this.route.snapshot.params.username,
        this.route.snapshot.params.postId,
        this.viewPostPresenter
      );
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

    this.viewPostViewModel.username = username;
    this.viewPostViewModel.levelCompleted = levelCompleted;
    this.viewPostViewModel.levelName = levelName;
    this.viewPostViewModel.profileImage = profileImageUrl;
    this.updateRewardsList(rewards);
  }

  /**
   *
   * @param {Array<RewardItem>} newRewards
   */
  updateRewardsList(newRewards: Array<RewardItem>) {
    this.viewPostViewModel.rewards.length = 0;
    newRewards.forEach((it) => {
      this.viewPostViewModel.rewards.push(it);
    });
  }


  updatePostData(title: string, estimateTime: string, tags: Array<string>, text: string, bannerImage: string) {
    this.viewPostViewModel.title = title;
    this.viewPostViewModel.estimatedMinutes = estimateTime;
    this.viewPostViewModel.tags = tags;
    this.viewPostViewModel.postImageUrl = bannerImage;
    this.viewPostViewModel.postHtmlText = text;
  }

  /**
   *
   */
  logout() {
    super.logout(this.viewPostPresenter);
  }

  /**
   *
   * @param {String} message
   */
  showErrorAlert(message: String) {
    alert(message);
  }
}
