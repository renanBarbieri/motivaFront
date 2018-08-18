import {Injectable} from "@angular/core";
import {AuthOutputBoundary, AuthOutputModel} from "@app/useCases/auth/AuthOutputBoundary";
import {AuthInputBoundary, AuthInputModel} from "@app/useCases/auth/AuthInputBoundary";
import AuthRepository from "@app/data/auth/AuthRepository";

@Injectable()
export default class AuthUseCase implements AuthInputBoundary {
  constructor(private authRepository: AuthRepository) {
  }

  /**
   *
   * @param {AuthOutputBoundary} outputBoundary
   * @returns {Promise<void>}
   */
  async performAuthValidation(outputBoundary: AuthOutputBoundary) {
    try {
      let authKey = await this.authRepository.getKey();
      if (authKey) {
        let authResponse = new AuthOutputModel();
        authResponse.code = 200;
        authResponse.message = authKey;
        authResponse.logged = true;
        outputBoundary.onAuthSuccess(authResponse);
      }
      else {
        console.log("Nenhuma chave encontrada.");
        outputBoundary.onAuthError(null);
      }
    } catch (error) {
      outputBoundary.onAuthError(error.message ? `Erro ao realizar a autenticação: ${error.message}` : error);
    }
  }

  /**
   * Adiquire o token e armazena localmente
   * @param {AuthInputModel} input modelo de entrada com usuário e senha
   * @param {AuthOutputBoundary} outputBoundary modelo de saída indicando se o login foi realizado com sucesso
   */
  async performLogin(input: AuthInputModel, outputBoundary: AuthOutputBoundary) {
    try {
      let tokenKey = await this.authRepository.generateKey(input.username, input.password);
      if (tokenKey) {
        // if(!tokenKey.firstLogin) {
        //   await this.authRepository.setKey(tokenKey);
        // }
        let authResponse = new AuthOutputModel();
        authResponse.code = 200;
        authResponse.message = tokenKey;
        authResponse.logged = true;
        authResponse.firstLogin = true; //TODO: TRAZER ISSO DO BANCO
        outputBoundary.onAuthSuccess(authResponse);
      }
      else throw "Não foi encontrada uma atenticação";
    } catch (error) {
      console.log(`Não foi possível realizar o login: ${error}`);
      outputBoundary.onAuthError(`Não foi possível realizar o login: ${error}`);
    }
  }

  /**
   *
   * @param {AuthOutputBoundary} outputBoundary
   */
  performLogout(outputBoundary: AuthOutputBoundary) {
    try {
      this.authRepository.clearKey();
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
