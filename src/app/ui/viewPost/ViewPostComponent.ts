import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";
import RewardItem from "@app/ui/models/RewardItem";
import {ScreenState} from "@app/ui/ScreenState";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import LoggedComponent from "@app/ui/logged/LoggedComponent";
import PublishPostUseCase from "@app/useCases/publishPost/PublishPostUseCase";
import ManageTagUseCase from "@app/useCases/tag/ManageTagUseCase";
import ViewPostController from "@app/ui/viewPost/ViewPostController";
import ViewPostPresenter from "@app/ui/viewPost/ViewPostPresenter";
import ViewPostViewModel from "@app/ui/viewPost/ViewPostViewModel";
import {ViewPostUiView} from "@app/ui/viewPost/ViewPostUIView";

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
    { provide: PublishPostUseCase, useClass: PublishPostUseCase },
    { provide: ManageTagUseCase, useClass: ManageTagUseCase }
  ]
})
export class ViewPostComponent extends LoggedComponent implements OnInit, ViewPostUiView{

  @Output()
  screenStateChange = new EventEmitter<ScreenState>();

  @Output()
  authStateLogged = new EventEmitter<boolean>();

  constructor( private viewPostPresenter: ViewPostPresenter, private viewPostController: ViewPostController,
               private viewPostViewModel: ViewPostViewModel){
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
