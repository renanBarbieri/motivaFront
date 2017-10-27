import {UsuarioDataSource} from "../datasource/UsuarioDataSource";
import {GetDadosUsuarioInteractor} from "../../core/interaction/interactor/GetDadosUsuarioInteractor";
import UsuarioApiDataSource from "../datasource/impl/UsuarioApiDataSource";
import UsuarioDataModel from "../model/UsuarioDataModel";

export default class UsuarioRepository{
  
  private usuarioApiDataSource: UsuarioDataSource;
  
  constructor(){
    this.usuarioApiDataSource = new UsuarioApiDataSource();
  }
  
  get(id: string): Promise<GetDadosUsuarioInteractor.ResponseData> {
    return new Promise<GetDadosUsuarioInteractor.ResponseData>(async (resolve, reject) => {
      let usuario: UsuarioDataModel = await this.usuarioApiDataSource.get(id);
      let responseData: GetDadosUsuarioInteractor.ResponseData = new GetDadosUsuarioInteractor.ResponseData();
      
      responseData.username = usuario.username;
      
      resolve(responseData);
    });
  }
}
