import {HomeUseCase} from "../HomeUseCase";
import {UsuarioDataSource} from "../../data/datasource/UsuarioDataSource";
import UsuarioRepository from "../../data/repository/UsuarioRepository";
import {GetDadosUsuarioRequestData} from "../GetDadosUsuarioInputBoundary";
import {GetDadosUsuarioOutputBoundary, GetDadosUsuarioResponseData} from "../GetDadosUsuarioOutputBoundary";
import Usuario from "../../entity/Usuario";

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
      
      presenter.getDadosUsuarioSuccess(responseData);
    }
    catch (err){
      presenter.getDadosUsuarioError(err);
    }
  }
}
