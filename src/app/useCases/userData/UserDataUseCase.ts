import {GetUserDataInputBoundary, GetUserDataInputModel} from "app/useCases/userData/GetUserDataInputBoundary";
import {GetUserDataOutputBoundary, GetUserDataOutputModel} from "app/useCases/userData/GetUserDataOutputBoundary";
import User from "app/entity/User";
import {Injectable} from "@angular/core";
import UserRepository from "app/data/repository/UserRepository";
import Tag from "app/entity/Tag";

@Injectable()
export default class UserDataUseCase implements GetUserDataInputBoundary{
  constructor(private userRepository: UserRepository){}

  async getUser(requestData: GetUserDataInputModel, presenter: GetUserDataOutputBoundary) {
    let responseData: GetUserDataOutputModel = new GetUserDataOutputModel();
    try{
      const userId = requestData.userId;
      const user: User = await this.userRepository.get(userId);

      responseData.username = user.username;
      responseData.levelCompleted = user.level.experience;
      responseData.levelName = user.level.name;
      responseData.profileImage = user.avatar;
      responseData.tags = UserDataUseCase.mapTagIds(user.interests);

      presenter.onGetUserDataSuccess(responseData);
    }
    catch (err){
      presenter.onGetUserDataError(err);
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
