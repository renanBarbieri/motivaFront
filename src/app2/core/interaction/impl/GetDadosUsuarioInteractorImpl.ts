import {GetDadosUsuarioInteractor} from "../interactor/GetDadosUsuarioInteractor";
import ResponseData = GetDadosUsuarioInteractor.ResponseData;
import Usuario from "../../entity/Usuario";
import UsuarioRepository from "../../../data/repository/UsuarioRepository";
import {UsuarioDataSource} from "../../../data/datasource/UsuarioDataSource";

export default class GetDadosUsuarioInteractorImpl implements GetDadosUsuarioInteractor{

  private usuarioRepository: UsuarioDataSource;

  constructor(){
    this.usuarioRepository = new UsuarioRepository();
  }

  interact(requestData: GetDadosUsuarioInteractor.RequestData): Promise<GetDadosUsuarioInteractor.ResponseData> {
    return new Promise<ResponseData>(async (resolve, reject) => {
      try {
        const id = requestData.idUsuario;
        const response: ResponseData = await this.usuarioRepository.get(id);
        resolve(response);
      }
      catch (err){
        reject()
      }
    });
  }
}
