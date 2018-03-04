import {HomeUseCase} from "@app/interaction/HomeUseCase";
import HomeUseCaseImpl from "@app/interaction/impl/HomeUseCaseImpl";
import Usuario from "@app/entity/User";
import UsuarioRepository from "@app/data/repository/impl/UserRepositoryImpl";
import {GetUserDataRequestData} from "@app/interaction/GetUserDataUseCase";
import {GetUserDataResponseData, GetUserDataResponseHandler} from "@app/interaction/GetUserDataResponseHandler";

describe('Teste dos casos de uso GetDadosUsuario', () => {

  let homeUseCase: HomeUseCase;
  let presenterSpy: PresenterSpy;


  beforeEach(() => {
    homeUseCase = new HomeUseCaseImpl();
    presenterSpy = new PresenterSpy();
  });

  function getUsuario(): Usuario {
    let usuario: Usuario = new Usuario();

    usuario.username = "lcleite";
    usuario.email = "lcleite@email.com";

    return usuario;
  }

  it('deve receber os dados mockados de um usuario atraves da sua ID', async (done) => {

    spyOn(UsuarioRepository.prototype, "get").and.callFake(() => {
      return getUsuario();
    });

    let requestData: GetUserDataRequestData = new GetUserDataRequestData();
    requestData.userId = "1";

    await homeUseCase.getUser(requestData, presenterSpy);

    expect(presenterSpy.responseData.username).toEqual("lcleite");

    done();
  });

});

class PresenterSpy implements GetUserDataResponseHandler{

  responseData: GetUserDataResponseData;

  onGetUserDataSuccess(responseData: GetUserDataResponseData) {
    this.responseData = responseData;
  }

  onGetUserDataError(errorData: any) {
    throw new Error("Method not implemented.");
  }
}
