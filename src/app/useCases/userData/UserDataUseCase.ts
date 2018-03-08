import {UserDataInputBoundary, UserDataInputModel} from "app/useCases/userData/UserDataInputBoundary";
import {UserDataOutputBoundary, UserDataOutputModel} from "app/useCases/userData/UserDataOutputBoundary";
import User from "app/entity/User";
import {Injectable} from "@angular/core";
import UserRepository from "app/data/repository/UserRepository";
import Tag from "app/entity/Tag";

@Injectable()
export default class UserDataUseCase implements UserDataInputBoundary{
  constructor(private userRepository: UserRepository){}

  async getUser(requestData: UserDataInputModel, presenter: UserDataOutputBoundary) {
    let responseData: UserDataOutputModel = new UserDataOutputModel();
    try{
      const userId = requestData.userId;
      const user: User = await this.userRepository.get(userId);

      responseData.username = user.username;
      responseData.levelCompleted = user.level.experience;
      responseData.levelName = user.level.name;
      responseData.profileImage = user.avatar;
      responseData.tags = UserDataUseCase.mapTagIds(user.interests);

      presenter.onUserDataSuccess(responseData);
    }
    catch (err){
      presenter.onUserDataError(err);
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
