import {UserDataInputBoundary, UserDataInputModel} from "app/useCases/userData/UserDataInputBoundary";
import {UserDataOutputBoundary, UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import User from "app/entity/User";
import {Injectable} from "@angular/core";
import UserRepository from "app/data/user/UserRepository";
import Tag from "app/entity/Tag";
import RewardItem from "@app/ui/models/RewardItem";
import AuthRepository from "@app/data/auth/AuthRepository";

@Injectable()
export default class UserDataUseCase implements UserDataInputBoundary{
  constructor(private userRepository: UserRepository, private authRepository: AuthRepository){}

  async getUser(requestData: UserDataInputModel, outputBoundary: UserDataOutputBoundary) {
    let responseData: UserDataOutputModel = new UserDataOutputModel();
    let user: User;

    try {
      if (requestData.authKey &&!requestData.username && !requestData.password) {
        user = await this.userRepository.getByKey(requestData.authKey);
      }
      else if (!requestData.authKey && requestData.username && requestData.password) {
        let loginResponse = await this.userRepository.getByLogin(requestData.username, requestData.password);
        let storageKey = await this.authRepository.setStorageKey(loginResponse[1]);
        if(storageKey) user = loginResponse[0];
        else throw new Error("Erro ao salvar seus dados");
      }
      else {
        throw new Error("Solicitação não conhecida");
      }

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

    } catch (err) {
      outputBoundary.onUserDataError(err);
      return;
    }
  }

  private static mapTagIds(tagsEntity: Tag[]): Map<number, string>{
    let responseTags = new Map();

    for(let tag of tagsEntity){
      responseTags.set(tag.id, tag.name);
    }

    return responseTags;
  }
}