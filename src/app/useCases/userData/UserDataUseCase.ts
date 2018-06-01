import {UserDataInputBoundary, UserDataInputModel} from "app/useCases/userData/UserDataInputBoundary";
import {UserDataOutputBoundary, UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import User from "app/entity/User";
import {Injectable} from "@angular/core";
import UserRepository from "app/data/user/UserRepository";
import Tag from "app/entity/Tag";
import RewardItem from "@app/ui/models/RewardItem";
import AuthRepository from "@app/data/auth/AuthRepository";

@Injectable()
export default class UserDataUseCase implements UserDataInputBoundary {
  constructor(private userRepository: UserRepository, private authRepository: AuthRepository) {
  }

  private static mapTagIds(tagsEntity: Tag[]): Map<number, string> {
    let responseTags = new Map();

    for (let tag of tagsEntity) {
      responseTags.set(tag.id, tag.name);
    }

    return responseTags;
  }

  async getPublicUser(requestData: UserDataInputModel, outputBoundary: UserDataOutputBoundary) {
    let responseData: UserDataOutputModel = new UserDataOutputModel();
    responseData.publicProfile = true;
    try {
      let token = await this.authRepository.getKey();
      let username = requestData.username;
      if (!username) {
        let user: User = await this.userRepository.get(token);
        if (user)
          username = user.username;
        else
          outputBoundary.onUserDataError("Usuário inválido");
      }

      let userProfile = await  this.userRepository.getPublicProfile(token, username);

      if (userProfile) {
        responseData.username = userProfile.username;
        responseData.levelName = userProfile.level.name;
        responseData.profileImage = userProfile.avatar;
        responseData.rewards = userProfile.rewards.map(function (it) {
          let rewardView = new RewardItem();
          rewardView.entityReference = it.id.toString();
          rewardView.icon = it.image;
          rewardView.name = it.name;
          return rewardView;
        });
        responseData.tags = UserDataUseCase.mapTagIds(userProfile.interests);

        outputBoundary.onUserDataSuccess(responseData);
      }
      else {
        console.log("err");
      }

    } catch (err) {
      console.log("err");
      outputBoundary.onUserDataError(err);
    }
  }

  async getUser(requestData: UserDataInputModel, outputBoundary: UserDataOutputBoundary) {
    let responseData: UserDataOutputModel = new UserDataOutputModel();
    responseData.publicProfile = false;
    try {

      let token = await this.authRepository.getKey();
      let user: User = await this.userRepository.get(token);
      if (user) {
        responseData.username = user.username;
        responseData.levelCompleted = user.level.experience;
        responseData.levelName = user.level.name;
        responseData.profileImage = user.avatar;
        responseData.rewards = user.rewards.map(function (it) {
          let rewardView = new RewardItem();
          rewardView.entityReference = it.id.toString();
          rewardView.icon = it.image;
          rewardView.name = it.name;
          return rewardView;
        });
        responseData.tags = UserDataUseCase.mapTagIds(user.interests);

        outputBoundary.onUserDataSuccess(responseData);
      }
      else {
        console.log("err");
      }

    } catch (err) {
      console.log("err");
      outputBoundary.onUserDataError(err);
    }
  }
}
