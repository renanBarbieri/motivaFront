import {GetDadosUsuarioInteractor} from "../../core/interaction/interactor/GetDadosUsuarioInteractor";
import UsuarioDataModel from "../model/UsuarioDataModel";

export interface UsuarioDataSource{
  get(id:string): Promise<UsuarioDataModel>;
}
