
export interface GetDadosUsuarioOutputBoundary{ //TODO: rename -> GetDadosUsuarioResponseHandler ou algo do tipo
  getDadosUsuarioSuccess(responseData: GetDadosUsuarioResponseData);
  getDadosUsuarioError(errorData: any);
}

export class GetDadosUsuarioResponseData{
  public username: string;
}
