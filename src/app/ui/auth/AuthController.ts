import {UserDataOutputBoundary} from "app/useCases/userData/UserDataOutputBoundary";
import {UserDataInputModel} from "app/useCases/userData/UserDataInputBoundary";
import {Injectable} from "@angular/core";
import UserDataUseCase from "app/useCases/userData/UserDataUseCase";

@Injectable()
export default class AuthController{

  constructor(private userDataUseCase: UserDataUseCase) {}

  getUserData(responseHandler: UserDataOutputBoundary){
    let requestData = new UserDataInputModel();
    this.userDataUseCase.getUser(requestData, responseHandler);
  }
}
