import {Injectable} from "@angular/core";
import {AuthOutputBoundary, AuthOutputModel} from "@app/useCases/auth/AuthOutputBoundary";
import {AuthInputBoundary} from "@app/useCases/auth/AuthInputBoundary";
import AuthRepository from "@app/data/auth/AuthRepository";

@Injectable()
export default class AuthUseCase implements AuthInputBoundary{
  constructor(private authRepository: AuthRepository){}

  async performAuthValidation(outputBoundary: AuthOutputBoundary) {
    try {
      let authKey = await this.authRepository.getStorageKey();
      if(authKey){
        let authResponse = new AuthOutputModel();
        authResponse.code = 200;
        authResponse.message = authKey;
        authResponse.logged = true;
        outputBoundary.onAuthSuccess(authResponse);
      }
      else throw "Não foi encontrada uma atenticação";
    } catch (error) {
      outputBoundary.onAuthError(`Erro ao realizar a autenticação: ${error.message}`);
    }
  }

  performLogout(outputBoundary: AuthOutputBoundary) {
    try {
      this.authRepository.clearStorageKey();
      let response = new AuthOutputModel();
      response.code = 200;
      response.message = "Usuário deslogado com sucesso";
      response.logged = false;
      outputBoundary.onAuthSuccess(response);
    } catch (error) {
      outputBoundary.onAuthError(error.message);
    }
  }
}
