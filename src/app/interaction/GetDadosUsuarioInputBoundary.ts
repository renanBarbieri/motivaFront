import {GetDadosUsuarioOutputBoundary} from "./GetDadosUsuarioOutputBoundary";

export interface GetDadosUsuarioInputBoundary{ //TODO: rename -> GetDadosUsuarioUseCase, GetDadosUsuarioInteraction ou algo do tipo
  getUsuario(requestData: GetDadosUsuarioRequestData, presenter: GetDadosUsuarioOutputBoundary)
}

export class GetDadosUsuarioRequestData {
  public idUsuario: string;
}
