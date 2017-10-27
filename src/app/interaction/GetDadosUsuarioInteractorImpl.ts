import {GetDadosUsuarioInteractor} from "./GetDadosUsuarioInteractor";
import ResponseData = GetDadosUsuarioInteractor.ResponseData;
import Usuario from "../entity/Usuario";
import {UsuarioDataService} from "../data/service/UsuarioDataService";
import UsuarioDataServiceImpl from "../data/service/UsuarioDataServiceImpl";

export default class GetDadosUsuarioInteractorImpl implements GetDadosUsuarioInteractor{

  private usuarioDataService: UsuarioDataService;

  constructor(){
    this.usuarioDataService = new UsuarioDataServiceImpl();
  }

  interact(requestData: GetDadosUsuarioInteractor.RequestData):
      Promise<GetDadosUsuarioInteractor.ResponseData> {
    return new Promise<ResponseData>(async (resolve, reject) => {
      try {
        const usuario: Usuario = await this.usuarioDataService.get("fodase");

        let response: ResponseData = new ResponseData();
        response.usuario = usuario;

        resolve(response);
      }
      catch (err){
        reject()
      }
    });
  }
}
