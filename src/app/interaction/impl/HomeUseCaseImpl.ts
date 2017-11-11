import {HomeUseCase} from "@app/interaction/HomeUseCase";
import {UsuarioDataSource} from "@app/data/datasource/UsuarioDataSource";
import UsuarioRepository from "@app/data/repository/UsuarioRepository";
import {GetDadosUsuarioRequestData} from "@app/interaction/GetDadosUsuarioInputBoundary";
import {
  GetDadosUsuarioOutputBoundary,
  GetDadosUsuarioResponseData
} from "@app/interaction/GetDadosUsuarioOutputBoundary";
import Usuario from "@app/entity/Usuario";
import {GetTopicosInteresseRequestData} from "@app/interaction/GetTopicosInteresseInputBoundary";
import {
  GetTopicosInteresseOutputBoundary,
  GetTopicosInteresseResponseData
} from "@app/interaction/GetTopicosInteresseOutputBoundary";
import {ArticleDataSource} from "@app/data/datasource/ArticleDataSource";
import ArticleRepository from "@app/data/repository/ArticleRepository";
import Article from "@app/entity/Article";

export default class HomeUseCaseImpl implements HomeUseCase{
  private usuarioRepository: UsuarioDataSource;
  private articleRepository: ArticleDataSource;

  constructor(){
    this.usuarioRepository = new UsuarioRepository();
    this.articleRepository = new ArticleRepository();
  }

  async getUsuario(requestData: GetDadosUsuarioRequestData, presenter: GetDadosUsuarioOutputBoundary) {
    let responseData: GetDadosUsuarioResponseData = new GetDadosUsuarioResponseData();
    try{
      const idUsuario = requestData.idUsuario;
      const usuario: Usuario = await this.usuarioRepository.get(idUsuario);

      responseData.username = usuario.username;
      responseData.levelCompleted = usuario.nivel.experiencia;
      responseData.levelName = usuario.nivel.nome;

      presenter.getDadosUsuarioSuccess(responseData);
    }
    catch (err){
      presenter.getDadosUsuarioError(err);
    }
  }


  async getTopicos(requestData: GetTopicosInteresseRequestData, presenter: GetTopicosInteresseOutputBoundary) {
    let responseData: GetTopicosInteresseResponseData = new GetTopicosInteresseResponseData();
    try{
      const idUsuario = requestData.idUsuario;
      // const article: Article = await this.articleRepository.get(idUsuario);
      let articles: string[] = ["nome 1", "nome 2", "nome 3", "nome 4"];
      responseData.topicListData = new Map();
      responseData.topicListData.set("Primeiro Tópico", articles);
      responseData.topicListData.set("Segundo Tópico", articles);
      responseData.topicListData.set("Terceiro Tópico", articles);
      responseData.topicListData.set("Quarto Tópico", articles);

      presenter.getTopicosInsteresseSuccess(responseData);
    }
    catch (err){
      presenter.getTopicosInsteresseError(err)
    }
  }
}
