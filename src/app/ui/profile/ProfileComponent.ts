import LoggedComponent from "@app/ui/logged/LoggedComponent";
import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {ScreenState} from "@app/ui/ScreenState";
import ProfilePresenter from "@app/ui/profile/ProfilePresenter";
import ProfileViewModel from "@app/ui/profile/ProfileViewModel";
import ProfileController from "@app/ui/profile/ProfileController";
import {ProfileUIView} from "@app/ui/profile/ProfileUIView";
import RewardItem from "@app/ui/models/RewardItem";
import PostItem from "@app/ui/models/PostItem";
import SearchUseCase from "@app/useCases/search/SearchUseCase";
import UserDataUseCase from "@app/useCases/userData/UserDataUseCase";
import AuthUseCase from "@app/useCases/auth/AuthUseCase";
import {ActivatedRoute} from "@angular/router";
import PostsOfTopicsInterestUseCase from "@app/useCases/postsOfTopicsInterest/PostsOfTopicsInteresUseCase";

@Component({
  selector: 'app-profile',
  templateUrl: './ProfileView.html',
  styleUrls: ['./ProfileStyle.css'],
  providers: [
    { provide: ProfileController, useClass: ProfileController },
    { provide: ProfilePresenter, useClass: ProfilePresenter },
    { provide: ProfileViewModel, useClass: ProfileViewModel },
    { provide: UserDataUseCase, useClass: UserDataUseCase },
    { provide: AuthUseCase, useClass: AuthUseCase },
    { provide: SearchUseCase, useClass: SearchUseCase},
    { provide: PostsOfTopicsInterestUseCase, useClass: PostsOfTopicsInterestUseCase }
  ]
})
export class ProfileComponent extends LoggedComponent implements OnInit, ProfileUIView {

  @Output()
  screenStateChange = new EventEmitter<ScreenState>();

  @Output()
  authStateLogged = new EventEmitter<boolean>();

  constructor(private profilePresenter: ProfilePresenter,
              private profileController: ProfileController,
              public profileViewModel: ProfileViewModel,
              private route: ActivatedRoute){
    super(profileController);
  }

  ngOnInit(){
    this.profilePresenter.onViewInit(this);
    this.profileController.verifyAuthorization(this.profilePresenter);
  }

  updateLoggedStatus(logged: boolean) {
    this.screenStateChange.emit(ScreenState.LOADING);
    if(logged){
      this.authStateLogged.emit(true);
      this.profileController.getUserData(this.profilePresenter);
      this.profileController.getProfileData(this.profilePresenter, this.route.snapshot.params.username);
    }
    else {
      this.authStateLogged.emit(false);
    }
  }

  updateUserData(username: string, levelCompleted: number, levelName: string, profileImageUrl: string,
                 rewards: Array<RewardItem>, tags: Map<number, string>) {
    this.profileViewModel.selfUsername = username;
    this.profileViewModel.selfLevelCompleted = levelCompleted;
    this.profileViewModel.selfLevelName = levelName;
    this.profileViewModel.selfProfileImage = profileImageUrl;
    this.updateSelfRewardsList(rewards);
  }


  updateProfileData(username: string, levelName: string, profileImageUrl: string, rewards: Array<RewardItem>,
                    tags: Map<number, string>) {
    this.profileViewModel.userName = username;
    this.profileViewModel.userLevelName = levelName;
    this.profileViewModel.userProfileImage = profileImageUrl;
    this.updateRewardsList(rewards);
    this.updateTopicsOfInterestList(Array.from( tags.values()) );
    this.profileController.getPostsOfTopics(this.profilePresenter, tags);
  }

  updateSelfRewardsList(newRewards: Array<RewardItem>) {
    this.profileViewModel.selfRewards.length = 0;
    newRewards.forEach((it) => {
      this.profileViewModel.selfRewards.push(it);
    });
  }

  updateRewardsList(newRewards: Array<RewardItem>) {
    this.updateViewList(
      newRewards,
      this.profileViewModel.userRewards,
      this.profileViewModel.userRewardsIndexes
    );
  }

  updateTopicsOfInterestList(newTopics: Array<string>) {
    this.updateViewList(
      newTopics,
      this.profileViewModel.userTopicsKeys,
      this.profileViewModel.userTopicsKeysIndexes
    )

  }

  updateViewList(contentArray: Array<any>, toPopulateArray: Array<any>, indexes: Array<number>) {
    let count = 0;
    toPopulateArray.length = 0;
    indexes.length = 0;

    contentArray.forEach((it) => {
      toPopulateArray.push(it);
      indexes.push(count);
      count++;
    });
  }

  updateTopicList(topicList: Map<string, PostItem[]>) {
    this.profileViewModel.topicsList.clear();
    this.profileViewModel.topicsKeys.length = 0;

    topicList.forEach((value: PostItem[], key: string) => {
      this.profileViewModel.topicsKeys.push(key);
      this.profileViewModel.topicsList.set(key, value)
    });
  }

  showErrorAlert(message: String) {
  }
}
