import {HomeUseCase} from "../../../../app/interaction/HomeUseCase";
import HomeUseCaseImpl from "../../../../app/interaction/impl/HomeUseCaseImpl";
import Usuario from "../../../../app/entity/Usuario";
import {
  GetDadosUsuarioOutputBoundary,
  GetDadosUsuarioResponseData
} from "../../../../app/interaction/GetDadosUsuarioOutputBoundary";
import {GetDadosUsuarioRequestData} from "../../../../app/interaction/GetDadosUsuarioInputBoundary";
import UsuarioRepository from "../../../../app/data/repository/UsuarioRepository";

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
    
    let requestData: GetDadosUsuarioRequestData = new GetDadosUsuarioRequestData();
    requestData.idUsuario = "1";
  
    await homeUseCase.getUsuario(requestData, presenterSpy);
  
    expect(presenterSpy.responseData.username).toEqual("lcleite");
  
    done();
  });
  
});

class PresenterSpy implements GetDadosUsuarioOutputBoundary{
  
  responseData: GetDadosUsuarioResponseData;
  
  getDadosUsuarioSuccess(responseData: GetDadosUsuarioResponseData) {
    this.responseData = responseData;
  }
  
  getDadosUsuarioError(errorData: any) {
    throw new Error("Method not implemented.");
  }
}
