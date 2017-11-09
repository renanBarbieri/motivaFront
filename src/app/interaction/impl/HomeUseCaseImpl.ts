import {HomeUseCase} from "@app/interaction/HomeUseCase";
import {UsuarioDataSource} from "@app/data/datasource/UsuarioDataSource";
import UsuarioRepository from "@app/data/repository/UsuarioRepository";
import {GetDadosUsuarioRequestData} from "@app/interaction/GetDadosUsuarioInputBoundary";
import {
  GetDadosUsuarioOutputBoundary,
  GetDadosUsuarioResponseData
} from "@app/interaction/GetDadosUsuarioOutputBoundary";
import Usuario from "@app/entity/Usuario";

export default class HomeUseCaseImpl implements HomeUseCase{
  private usuarioRepository: UsuarioDataSource;

  constructor(){
    this.usuarioRepository = new UsuarioRepository();
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
}
