import {Injectable} from "@angular/core";
import {AuthOutputBoundary, AuthOutputModel} from "@app/useCases/auth/AuthOutputBoundary";
import {AuthInputBoundary, AuthInputModel} from "@app/useCases/auth/AuthInputBoundary";
import AuthRepository from "@app/data/auth/AuthRepository";
import {AuthPasswordOutputBoundary} from "@app/useCases/auth/AuthPasswordOutputBoundary";

@Injectable()
export default class AuthUseCase implements AuthInputBoundary {

  private tempAuthKey;

  constructor(private authRepository: AuthRepository) {}

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
      let authToken = await this.authRepository.generateKey(input.username, input.password);
      if (authToken) {
        if(!authToken.isFirstLogin) {
          await this.authRepository.setKey(authToken.token);
        }
        else {
          this.tempAuthKey = authToken.token;
        }
        let authResponse = new AuthOutputModel();
        authResponse.code = 200;
        authResponse.message = authToken.token;
        authResponse.logged = true;
        authResponse.firstLogin = authToken.isFirstLogin;
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

  performChangePassword(input: AuthInputModel, outputBoundary: AuthPasswordOutputBoundary){
    try {
      console.log(`Temp Key: ${this.tempAuthKey}`);
      let response = this.authRepository.changePassword(this.tempAuthKey, input.password);
      console.log("resolveu");
    } catch (e) {
      console.log("não resolveu");
      console.log(e);
    }
  }
}
