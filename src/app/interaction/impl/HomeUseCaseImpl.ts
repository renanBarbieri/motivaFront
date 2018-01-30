import {HomeUseCase} from "@app/interaction/HomeUseCase";
import {UserDataSource} from "@app/data/datasource/UserDataSource";
import UsuarioRepository from "@app/data/repository/UserRepository";
import {GetUserDataRequestData} from "@app/interaction/GetUserDataUseCase";
import {
  GetUserDataResponseHandler,
  GetUserDataResponseData
} from "@app/interaction/GetUserDataResponseHandler";
import Usuario from "@app/entity/User";
import {GetTopicsInterestRequestData} from "@app/interaction/GetTopicsInterestUseCase";
import {
  GetTopicsInterestResponseHandler,
  GetTopicsInterestResponseData
} from "@app/interaction/GetTopicsInterestRespondeHandler";
import {ArticleDataSource} from "@app/data/datasource/ArticleDataSource";
import ArticleRepository from "@app/data/repository/ArticleRepository";
import Article from "@app/entity/Article";

export default class HomeUseCaseImpl implements HomeUseCase{
  private usuarioRepository: UserDataSource;
  private articleRepository: ArticleDataSource;

  constructor(){
    this.usuarioRepository = new UsuarioRepository();
    this.articleRepository = new ArticleRepository();
  }

  async getUser(requestData: GetUserDataRequestData, presenter: GetUserDataResponseHandler) {
    let responseData: GetUserDataResponseData = new GetUserDataResponseData();
    try{
      const idUsuario = requestData.userId;
      const usuario: Usuario = await this.usuarioRepository.get(idUsuario);

      responseData.username = usuario.username;
      responseData.levelCompleted = usuario.level.experience;
      responseData.levelName = usuario.level.name;

      presenter.onGetUserDataSuccess(responseData);
    }
    catch (err){
      presenter.onGetUserDataError(err);
    }
  }


  async getTopics(requestData: GetTopicsInterestRequestData, presenter: GetTopicsInterestResponseHandler) {
    let responseData: GetTopicsInterestResponseData = new GetTopicsInterestResponseData();
    try{
      const idUsuario = requestData.userId;
      // const article: Article = await this.articleRepository.get(userId);
      let articles: string[] = ["name 1", "name 2", "name 3", "name 4"];
      responseData.topicListData = new Map();
      responseData.topicListData.set("Primeiro Tópico", articles);
      responseData.topicListData.set("Segundo Tópico", articles);
      responseData.topicListData.set("Terceiro Tópico", articles);
      responseData.topicListData.set("Quarto Tópico", articles);

      presenter.onGetTopicsOfInterestSuccess(responseData);
    }
    catch (err){
      presenter.onGetTopicsOfInterestError(err)
    }
  }
}
