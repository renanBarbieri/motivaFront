import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {NgForm} from '@angular/forms';
import UserDataUseCase from "@app/useCases/userData/UserDataUseCase";
import LoginController from "@app/ui/login/LoginController";
import LoginPresenter from "@app/ui/login/LoginPresenter";
import {ScreenState} from "@app/ui/ScreenState";
import {LoginUiView} from "@app/ui/login/LoginUIView";
import LoginViewModel from "@app/ui/login/LoginViewModel";


@Component({
  selector: 'app-login',
  templateUrl: './LoginView.html',
  styleUrls: ['./LoginStyle.css'],
  providers: [
    { provide: LoginViewModel, useClass: LoginViewModel },
    { provide: LoginController, useClass: LoginController },
    { provide: LoginPresenter, useClass: LoginPresenter },
    { provide: UserDataUseCase, useClass: UserDataUseCase },
  ]
})
export class LoginComponent implements OnInit, LoginUiView{

  @Output()
  screenStateChange = new EventEmitter<ScreenState>();

  @Output()
  authStateLogged = new EventEmitter<boolean>();

  loginModel: any = {};

  constructor(private loginController: LoginController,
              private loginPresenter: LoginPresenter,
              private loginViewModel: LoginViewModel){}

  ngOnInit(){
    this.loginPresenter.onViewInit(this);
  }

  onSubmit(form: NgForm){
    if(form.valid){
      console.log(this.loginModel);
      this.loginController.makeLogin(this.loginModel.username, this.loginModel.password, this.loginPresenter);
      this.screenStateChange.emit(ScreenState.LOADING);
    }
  }

  onLoggingSuccess() {
    this.screenStateChange.emit(ScreenState.DONE);
    this.authStateLogged.emit(true);
  }

  showErrorAlert(message: String) {
    alert(message);
  }
}