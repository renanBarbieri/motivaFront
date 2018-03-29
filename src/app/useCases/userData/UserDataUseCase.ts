import {UserDataInputBoundary, UserDataInputModel} from "app/useCases/userData/UserDataInputBoundary";
import {UserDataOutputBoundary, UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import User from "app/entity/User";
import {Injectable} from "@angular/core";
import UserRepository from "app/data/user/UserRepository";
import Tag from "app/entity/Tag";
import RewardItem from "@app/ui/models/RewardItem";

@Injectable()
export default class UserDataUseCase implements UserDataInputBoundary{
  constructor(private userRepository: UserRepository){}

  async getUser(requestData: UserDataInputModel, outputBoundary: UserDataOutputBoundary) {
    let responseData: UserDataOutputModel = new UserDataOutputModel();
    let user: User;

    try {
      if (!requestData.username && !requestData.password) {
        console.log("i'm here!");
        let authKey = await this.userRepository.getStorageKey();

        if(!authKey) throw new Error("Nenhum login encontrado");

        user = await this.userRepository.getByKey(authKey);
      }
      else if (requestData.username && requestData.password) {
        user = await this.userRepository.getByLogin(requestData.username, requestData.password);

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
