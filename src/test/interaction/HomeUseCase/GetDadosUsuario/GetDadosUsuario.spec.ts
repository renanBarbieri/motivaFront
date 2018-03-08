import {HomeInputBoundary} from "@app/useCases/home/HomeInputBoundary";
import HomeUseCaseImpl from "@app/useCases/home/HomeUseCase";
import Usuario from "@app/entity/User";
import UsuarioRepository from "@app/data/repository/UserRepository";
import {GetUserDataInputModel} from "@app/useCases/userData/GetUserDataInputBoundary";
import {GetUserDataOutputModel, GetUserDataOutputBoundary} from "@app/useCases/userData/GetUserDataOutputBoundary";

describe('Teste dos casos de uso GetDadosUsuario', () => {

  let homeUseCase: HomeInputBoundary;
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

    let requestData: GetUserDataInputModel = new GetUserDataInputModel();
    requestData.userId = "1";

    await homeUseCase.getUser(requestData, presenterSpy);

    expect(presenterSpy.responseData.username).toEqual("lcleite");

    done();
  });

});

class PresenterSpy implements GetUserDataOutputBoundary{

  responseData: GetUserDataOutputModel;

  onGetUserDataSuccess(responseData: GetUserDataOutputModel) {
    this.responseData = responseData;
  }

  onGetUserDataError(errorData: any) {
    throw new Error("Method not implemented.");
  }
}
