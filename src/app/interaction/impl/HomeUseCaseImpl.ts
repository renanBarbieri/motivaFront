import {HomeUseCase} from "@app/interaction/HomeUseCase";
import {GetUserDataRequestData} from "@app/interaction/GetUserDataUseCase";
import {GetUserDataResponseData, GetUserDataResponseHandler} from "@app/interaction/GetUserDataResponseHandler";
import User from "@app/entity/User";
import {GetTopicsInterestRequestData} from "@app/interaction/GetTopicsInterestUseCase";
import {
  GetTopicsInterestResponseData,
  GetTopicsInterestResponseHandler
} from "@app/interaction/GetTopicsInterestRespondeHandler";
import PostRepository from "@app/data/repository/impl/PostRepositoryImpl";
import {Injectable} from "@angular/core";
import UserRepositoryImpl from "@app/data/repository/impl/UserRepositoryImpl";
import Tag from "@app/entity/Tag";
import Post from "@app/entity/Post";
import {isNumber} from "util";

@Injectable()
export default class HomeUseCaseImpl implements HomeUseCase{
  constructor(private userRepository: UserRepositoryImpl, private postRepository: PostRepository){}

  async getUser(requestData: GetUserDataRequestData, presenter: GetUserDataResponseHandler) {
    let responseData: GetUserDataResponseData = new GetUserDataResponseData();
    try{
      const userId = requestData.userId;
      const user: User = await this.userRepository.get(userId);

      responseData.username = user.username;
      responseData.levelCompleted = user.level.experience;
      responseData.levelName = user.level.name;
      responseData.profileImage = user.avatar;
      responseData.tags = HomeUseCaseImpl.mapTagIds(user.interests);

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


  async getTopics(requestData: GetTopicsInterestRequestData, presenter: GetTopicsInterestResponseHandler) {

    let responseData: GetTopicsInterestResponseData = new GetTopicsInterestResponseData();
    try{
      responseData.topicListData = new Map();

      console.log("passei aqui");

      for(let key of Array.from(requestData.tags)){
        console.log(key);
        const posts: Post[] = await this.postRepository.getPostsFromTag(key.toString());

        let postsNames = Array<string>();
        for(let post of posts){
          postsNames.push(post.title)
        }
        console.log(isNumber(parseInt(key.toString())));
        //TODO: entender pq qualquer função do map não está funcionando
        // console.log(requestData.tags.has(parseInt(key.toString())))

        responseData.topicListData.set( "Topico ".concat(key.toString()), postsNames);
      }

      console.log("passei aqui 2");

      console.log(responseData.topicListData);
      presenter.onGetTopicsOfInterestSuccess(responseData);
    }
    catch (err){
      presenter.onGetTopicsOfInterestError(err)
    }
  }
}
