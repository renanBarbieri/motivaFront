import {UserDataOutputBoundary} from "app/useCases/userData/UserDataOutputBoundary";
import {UserDataInputModel} from "app/useCases/userData/UserDataInputBoundary";
import {Injectable} from "@angular/core";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";

@Injectable()
export default class LoginController{

  constructor(private userDataUseCase: UserDataUseCase) {}

  makeLogin(username: string, password: string, responseHandler: UserDataOutputBoundary){
    let requestData = new UserDataInputModel();
    requestData.username = username;
    requestData.password = password;
    this.userDataUseCase.getUser(requestData, responseHandler);
  }
}
