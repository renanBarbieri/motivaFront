
import {Interactor} from "../Interactor";
import ResponseData = GetDadosUsuarioInteractor.ResponseData;
import RequestData = GetDadosUsuarioInteractor.RequestData;

export interface GetDadosUsuarioInteractor extends Interactor<RequestData, ResponseData>{}

export namespace GetDadosUsuarioInteractor {
  export class RequestData implements Interactor.RequestData{
    public idUsuario: string;
  }

  export class ResponseData implements Interactor.ResponseData{
    public username: string;
  }
}
