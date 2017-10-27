import {UsuarioDataSource} from "../UsuarioDataSource";
import {GetDadosUsuarioInteractor} from "../../../core/interaction/interactor/GetDadosUsuarioInteractor";
import UsuarioDataModel from "../../model/UsuarioDataModel";

export default class UsuarioApiDataSource implements UsuarioDataSource{

  get(id: string): Promise<UsuarioDataModel> {
    return new Promise<UsuarioDataModel>(async (resolve, reject) => {

      let usuario = new UsuarioDataModel();
  
      usuario.username = "USERNAME_OK";

      resolve(usuario);
    });
  }
}
