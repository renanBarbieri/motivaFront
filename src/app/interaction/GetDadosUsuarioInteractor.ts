
import {Interactor} from "./Interactor";
import ResponseData = GetDadosUsuarioInteractor.ResponseData;
import RequestData = GetDadosUsuarioInteractor.RequestData;
import Usuario from "../entity/Usuario";

export interface GetDadosUsuarioInteractor extends Interactor<RequestData, ResponseData>{}

export namespace GetDadosUsuarioInteractor {
  export class RequestData implements Interactor.RequestData{
    public idUsuario: String;
  }

  export class ResponseData implements Interactor.ResponseData{
    public usuario: Usuario;
  }
}
