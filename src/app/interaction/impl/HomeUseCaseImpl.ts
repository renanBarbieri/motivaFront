import {HomeUseCase} from "@app/interaction/HomeUseCase";
import {GetUserDataRequestData} from "@app/interaction/GetUserDataUseCase";
import {GetUserDataResponseData, GetUserDataResponseHandler} from "@app/interaction/GetUserDataResponseHandler";
import User from "@app/entity/User";
import {GetTopicsInterestRequestData} from "@app/interaction/GetTopicsInterestUseCase";
import {
  GetTopicsInterestResponseData,
  GetTopicsInterestResponseHandler
} from "@app/interaction/GetTopicsInterestRespondeHandler";
import ArticleRepository from "@app/data/repository/impl/ArticleRepositoryImpl";
import {Injectable} from "@angular/core";
import UserRepositoryImpl from "@app/data/repository/impl/UserRepositoryImpl";

@Injectable()
export default class HomeUseCaseImpl implements HomeUseCase{
  constructor(private userRepository: UserRepositoryImpl, private articleRepository: ArticleRepository){}

  async getUser(requestData: GetUserDataRequestData, presenter: GetUserDataResponseHandler) {
    let responseData: GetUserDataResponseData = new GetUserDataResponseData();
    try{
      const userId = requestData.userId;
      const user: User = await this.userRepository.get(userId);

      responseData.username = user.username;
      responseData.levelCompleted = user.level.experience;
      responseData.levelName = user.level.name;
      responseData.profileImage = user.avatar;

      presenter.onGetUserDataSuccess(responseData);
    }
    catch (err){
      presenter.onGetUserDataError(err);
    }
  }


  async getTopics(requestData: GetTopicsInterestRequestData, presenter: GetTopicsInterestResponseHandler) {
    let responseData: GetTopicsInterestResponseData = new GetTopicsInterestResponseData();
    try{
      const userId = requestData.userId;
      // const article: Article = await this.articleRepository.get(userId);
      console.log("Use Case");
      let articles: Array<string> = ["name 1", "name 2", "name 3", "name 4"];
      responseData.topicListData = new Map();
      responseData.topicListData.set("Primeiro Tópico", articles);
      responseData.topicListData.set("Segundo Tópico", articles);
      responseData.topicListData.set("Terceiro Tópico", articles);
      responseData.topicListData.set("Quarto Tópico", articles);

      console.log(responseData.topicListData);
      presenter.onGetTopicsOfInterestSuccess(responseData);
    }
    catch (err){
      presenter.onGetTopicsOfInterestError(err)
    }
  }
}
